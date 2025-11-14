function solve(){


class Keyboard  {
    constructor(manufacturer, responseTim) {
      this.manufacturer= manufacturer;
      this.responseTim = responseTim;
    }
}

class Monitor {
    constructor(manufacturer, width, height) {
       this.manufacturer= manufacturer;
       this.width = width;
       this.height = height; 
    }
}

class Battery {
    constructor(manufacturer, expectedLife) {
       this.manufacturer= manufacturer;
       this.expectedLife = expectedLife; 
    }
}

class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        if (new.target === Computer) {
      throw new Error("Error");
    }
        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
    }
}
class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace)
        this.weight = weight;
        this.color = color;
        this.battery = battery;
    }

    set weight(number){
        if( typeof(number) == "number"){
            this._weight = number
        }
    }
    get weight(){
        return this._weight;
    }

      set color(str){
        if( typeof(str) == "string"){
            this._color = str;
        }
    }
    get color(){
        return this._color;
    }



    get battery(){
        return this._battery;
    }
    set battery(obj){
        if( obj instanceof Battery){
            this._battery = obj
        }else {
            throw new Error("TypeError");          
        }
    }
}

class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;  
    }
    get keyboard(){
        return this._keyboard;
    }
    set keyboard(obj){
        debugger
        if( obj instanceof Keyboard){
            this._keyboard = obj
        }else {
            throw new Error("TypeError");          
        }
    }

     get monitor(){
        return this._monitor;
    }
    set monitor(obj){
        if( obj instanceof Monitor){
            this._monitor = obj
        }else {
            throw new Error("TypeError");          
        }
    }
}

return{
Battery,
Keyboard,
Monitor,
Computer,
Laptop,
Desktop
}

}

let classes = solve();

let Computer = classes.Computer;

let Laptop = classes.Laptop;

let Desktop = classes.Desktop;

let myMonitor = classes.Monitor;
let mimiMonitor = new myMonitor(1,2,3);

let Battery = classes.Battery;

let myKeyboard = classes.Keyboard;
let mimiKeyboard = new myKeyboard(1,2);
debugger

let battery = new Battery('Energy', 3);

//console.log(battery);

let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery)

; 
//console.log(laptop);
let nastolen = new Desktop(1,2,3,4,mimiKeyboard, mimiMonitor);
//(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor)
console.log(nastolen);
