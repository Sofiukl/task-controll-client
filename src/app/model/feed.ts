export class Feed {
    
    private id: string;
    private name: string;
    private description: string;
    private status: string;
    private criteria: string

    public setID(id: string) {
        this.id = id;
    }
    public setName(name: string) {
        this.name = name;
    }
    public setDescription(description: string) {
        this.description = description;
    }
    public setStatus(status: string) {
        this.status = status;
    }
    public setCriteria(criteria: string) {
        this.criteria = criteria;
    }
    public getID() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public getDescription() {
        return this.description;
    }
    public getStatus() {
        return this.status;
    }
    public getCriteria() {
        return this.criteria;
    }
}
