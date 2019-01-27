export class Folder {
    
    private id: string;
    private name: string;

    public setID(id: string) {
        this.id = id;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getID() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
}
