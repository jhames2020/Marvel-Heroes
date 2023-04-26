 childMethod(msg: string) {
    this.childmsg=msg;
  }
  @Input() parentApi !: any;

callParent() {
  this.parentApi.callParentMethod("Hello Dear, Child Method is Called")
}