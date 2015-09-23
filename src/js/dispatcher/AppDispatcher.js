/**
 * Created by nikhila on 9/22/2015.
 */
let AppDispatcher = new (require('flux').Dispatcher)();

AppDispatcher.volunteersAction = function(data) {
    this.dispatch({
        source: 'VOLUNTEERS_ACTION',
        action: data
    });
};

module.exports = AppDispatcher;