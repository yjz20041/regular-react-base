/**
 * this class make it possible that children component invokes the context
 * like react component do.just inherit it whenever you like.
 */

import Regular from 'regularjs';

export default Regular.extend({
    config () {
        // do react like that merge all of the child contexts
        var parent = this.$outer;
        while (parent) {
            if (parent.hasOwnProperty('getChildContext') && 
              typeof parent.getChildContext === 'function') {
                this.data = {
                    ...(parent.getChildContext() || {}),
                    ...this.data
                }
            }
            parent = parent.$outer;
        }
    }
})