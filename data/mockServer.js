const { fruitData, vegetableData, seafoodData } = require("./mockData");

const REQUEST_TIME = 500;

function searchEndpoint(data) {
  return ({ keyword, limit = 5, cursor } = {}, failureRate = 0) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (Math.random() < failureRate) {
          return reject("Mock network error");
        }

        let startingIndex = 0;
        if (cursor) {
          startingIndex = data.findIndex(d => d.id === cursor);
          if (startingIndex < 0) {
            return reject(`Cursor '${cursor}' not found`);
          }
          startingIndex++;
        }

        const result = data
          .slice(startingIndex)
          .filter(
            d =>
              !keyword || d.name.toLowerCase().includes(keyword.toLowerCase())
          )
          .slice(0, limit);

        resolve(result);
      }, REQUEST_TIME)
    );
}

/**
 * three mocked server endpoints that have same input/out format:
 *
 * searchXXX(param, failureRate) => Promise of Result[]
 *
 * param: Object/dictionary of
 *  - keyword: optional string
 *  - limit: optional int
 *  - cursor: optional int, ID of the last item in previous set of results
 *
 * failureRate: optional float, range [0,1] inclusive. defaults to 0
 * a rate that promise will be rejected, to simulate network failure
 */
export const searchFruit = searchEndpoint(fruitData);
export const searchVegetable = searchEndpoint(vegetableData);
export const searchSeafood = searchEndpoint(seafoodData);
