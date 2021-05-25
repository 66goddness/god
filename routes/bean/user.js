class User{
    constructor(siger_name,siger_pass,place){
        this.siger_name=siger_name;
        this.siger_pass=siger_pass;
        this.place=place;
    }
}

class Index{
    constructor(friendname,old,tabsex,city,bookname,other,remark){
        this.friendname=friendname;
        this.old=old;
        this.tabsex=tabsex;
        this.city=city;
        this.bookname=bookname;
        this.other=other;
        this.remark=remark;
    }
}
module.exports=User;
module.exports=Index;