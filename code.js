module.exports = dijkstra;
function dijkstra(graph, sourceNode) {
    const distances = {}; 
    const visited = new Set(); 

    for (let node in graph) {
        distances[node] = Infinity; 
    }
    distances[sourceNode] = 0; 

    while (visited.size < Object.keys(graph).length) {
        let currentNode = null;
        let currentDistance = Infinity;

        for (let node in distances) {
            if (!visited.has(node) && distances[node] < currentDistance) {
                currentNode = node;
                currentDistance = distances[node];
            }
        }

        if (currentNode === null) break;

        visited.add(currentNode);

        for (let neighbor in graph[currentNode]) {
            const newDistance = distances[currentNode] + graph[currentNode][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }
    }

    return distances; 
}


