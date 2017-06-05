
/**
 * clone 对象
 */
export default function clone(p, c) {
    var c = c || null;
    if (p.constructor === Array) {
        !c && (c = []);
    } else {
        !c && (c = {})
    }

    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            clone(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

