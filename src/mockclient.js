import {Request} from './request.js'
import {Response} from './response.js'

export class MockClient {
    constructor(props) {
        this._maps = {}
    }
    exists (action) {
        return this._maps[action]
    }
    register (action, opts, fn) {
        var ret = {
            action: action,
            opts: opts,
        };
        ret.callback = fn.bind(ret);
        this._maps[action] = ret;
    }
    declare (actions, opts) {
        for (var action in actions) {
            this.register(action, opts, actions[action]);
        }
    }
    dispatch (action, opts, next) {
        var handle = this._maps[action]
        var req = new Request(opts)
        handle.callback(req, new Response(opts, function(res) {
            next({
                err: res.error,
                data: res.data,
                headers: res.headers,
            })
        }))
    }
}