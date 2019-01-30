/*! eXpressApp Framework
 * @version v2018 vol 2
 * @link https://www.devexpress.com
 * @license https://www.devexpress.com/Support/EULAs/universal.xml 
 * Copyright (C) 2000-2018 Developer Express Inc.  ALL RIGHTS RESERVED
 */
import * as traverse from "traverse";
import { compileGetter, compileSetter, isExpression } from "../../utils/index";
import { createCalcProp } from "./calc-prop";
var NODE_ID_KEY = "calcNodeId", ARRAY_NODE_ID = -1;
export function createCalcPropsProvider(config) {
    var nodeIdCounter = 0, currentLevel = 0;
    var descriptors = {}, calcPropIdsByNodeId = {}, generateCalcPropId = function (nodeId, propName) { return nodeId + "." + propName; }, currentNodeIds = [], patchedConfig = traverse(config)
        .map(function (node) {
        if (this.notLeaf) {
            if (currentLevel === this.level) {
                currentNodeIds.pop();
            }
            else if (currentLevel > this.level) {
                currentNodeIds.splice(this.level);
            }
            currentLevel = this.level;
            if (Array.isArray(node)) {
                currentNodeIds.push(ARRAY_NODE_ID);
                return;
            }
            var currentNodeId_1 = nodeIdCounter++;
            node[NODE_ID_KEY] = currentNodeId_1;
            currentNodeIds.push(currentNodeId_1);
            var nodeDescriptors = Object.keys(node)
                .filter(function (propName) { return isExpression(node[propName]); })
                .map(function (propName) {
                var propId = generateCalcPropId(currentNodeId_1, propName), expression = node[propName];
                return {
                    propId: propId,
                    propName: propName,
                    modelGetter: compileGetter(expression),
                    modelSetter: compileSetter(expression),
                    nodeIds: currentNodeIds.filter(function (nodeId) { return nodeId !== ARRAY_NODE_ID; })
                };
            });
            if (nodeDescriptors.length) {
                calcPropIdsByNodeId[currentNodeId_1] = nodeDescriptors.map(function (_a) {
                    var propId = _a.propId;
                    return propId;
                });
                nodeDescriptors.forEach(function (descriptor) {
                    descriptors[descriptor.propId] = descriptor;
                });
            }
        }
    }), subtreeCalcPropIdsByNodeId = Object.keys(descriptors)
        .reduce(function (result, propId) {
        var nodeIds = descriptors[propId].nodeIds;
        nodeIds.forEach(function (nodeId) { return result[nodeId] = (result[nodeId] || []).concat([propId]); });
        return result;
    }, {}), getSubtreeCalcPropIds = function (node) {
        var nodeId = node && node[NODE_ID_KEY];
        return subtreeCalcPropIdsByNodeId[nodeId];
    }, getSubtreeCalcProps = function (node, runContext) {
        var nodeId = node[NODE_ID_KEY], calcPropIds = getSubtreeCalcPropIds(node);
        return calcPropIds.reduce(function (result, propId) {
            result[propId] = getCalcProp(propId, nodeId, runContext);
            return result;
        }, {});
    }, hasSubtreeCalcProps = function (node) {
        return !!getSubtreeCalcPropIds(node);
    }, getDescriptor = function (propId) {
        var descriptor = descriptors[propId];
        if (!descriptor) {
            throw new Error("calcProps for: " + propId + " not found");
        }
        return descriptor;
    }, getCalcProp = createCalcProp(getDescriptor), getCalcPropIds = function (node) {
        var nodeId = node[NODE_ID_KEY];
        return calcPropIdsByNodeId[nodeId];
    }, findCalcProp = function (node, propName, runContext) {
        var nodeId = node[NODE_ID_KEY], propId = generateCalcPropId(nodeId, propName);
        return propId in descriptors ? getCalcProp(propId, nodeId, runContext) : undefined;
    };
    return {
        patchedConfig: patchedConfig,
        getDescriptor: getDescriptor,
        getCalcPropIds: getCalcPropIds,
        findCalcProp: findCalcProp,
        getSubtreeCalcProps: getSubtreeCalcProps,
        hasSubtreeCalcProps: hasSubtreeCalcProps
    };
}
