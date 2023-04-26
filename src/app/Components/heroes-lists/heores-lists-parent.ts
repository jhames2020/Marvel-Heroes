@ViewChild(ChildComponent ) child !:any ;

callChildMethod() {
   this.child.childMethod("Hello Dear, Parent Method is Called")
 }
 getParentMethod():any {
    return {
      callParentMethod: (name:any) => {
        this.parentMethod(name)
      }
    }
  }
 
  parentMethod(name: string) {
    this.parentMsg=name;
  }