
class a {
    k = 0;

    constructor (arg: any) {
        console.log('new a()', arg);
    }
    l() {
        this.k = 1;
        return this;
    }
    m() {
        console.log('a.m()');
    }
}

class b extends a {

    m() {
        super.m();
        console.log('b.m()');
        return this;
    }
}

export { a, b };
