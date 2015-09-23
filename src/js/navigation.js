/**
 * Created by nikhila on 9/22/2015.
 */
let Navigate  = {
    hash() {
        return location.hash;
    },
    to(path) {
        location.hash = path;
    }
};

export default Navigate;