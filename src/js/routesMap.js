/**
 * Created by nikhila on 9/23/2015.
 */

let _routesMap = new Map([
    ['cor', 'corporations'],
    ['vol', 'volunteers'],
    ['non', 'nonprofit'],
    ['phil', 'philantrophist']
]);

let routesMap = {
    get(key) {
        if( _routesMap.has(key) ) {
            return _routesMap.get(key);
        }
        return null;
    }
};

export default routesMap;