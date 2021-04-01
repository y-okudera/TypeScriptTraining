export class Item {
    constructor(private name: string, private price: number) { }

    public say(elem: HTMLElement | null): void {
        // 引数がnullでない場合
        if (elem) {
            elem.innerHTML = '署名:' + this.name + ' 価格: ' + this.price + '円';
        }
    }
}
