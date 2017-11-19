export class DynamicTableColumn {
    public name: string;
    public property: string;
    public fix : boolean;
    public columnActions : any[];
    public active;

    constructor(name: string, property: string, fix: boolean = false, columnActions : any[] = null) {
        this.name = name;
        this.property = property;
        this.fix = fix;
        this.columnActions = columnActions;
        this.active = false;
    }

    public toggle() {
        this.active = !this.active;
    }

}

export class DynamicTableOptions {
    public name: string;
    public classes: string;
    public containsConfigSets: boolean;

    constructor(name: string, containsConfigSets: boolean = false, classes : string = "") {
        this.name = name;
        this.classes = classes;
        this.containsConfigSets = containsConfigSets;
    }
}