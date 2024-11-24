const dijkstra = require('./code.js');
const assert = require('assert');

function runTests() {
    console.log("Running");

    {
        const graph = {
            A: { B: 1, C: 4 },
            B: { C: 2, D: 5 },
            C: { D: 1 },
            D: {}
        };
        const sourceNode = 'A';
        const expected = { A: 0, B: 1, C: 3, D: 4 };
        const result = dijkstra(graph, sourceNode);
        assert.deepStrictEqual(result, expected, 'Test 1 Failed');
    }

    {
        const graph = {
            A: { B: 1 },
            B: { C: 2 },
            C: {},
            D: {}
        };
        const sourceNode = 'A';
        const expected = { A: 0, B: 1, C: 3, D: Infinity };
        const result = dijkstra(graph, sourceNode);
        assert.deepStrictEqual(result, expected, 'Test 2 Failed');
    }

    {
        const graph = {
            A: {}
        };
        const sourceNode = 'A';
        const expected = { A: 0 };
        const result = dijkstra(graph, sourceNode);
        assert.deepStrictEqual(result, expected, 'Test 3 Failed');
    }

    {
        const graph = {
            A: { B: 3, D: 7 },
            B: { D: 1, E: 3 },
            C: { A: 2 },
            D: { E: 2 },
            E: {}
        };
        const sourceNode = 'A';
        const expected = { A: 0, B: 3, C: Infinity, D: 4, E: 6 };
        const result = dijkstra(graph, sourceNode);
        assert.deepStrictEqual(result, expected, 'Test 4 Failed');
    }

    console.log("passed");
}

runTests();

