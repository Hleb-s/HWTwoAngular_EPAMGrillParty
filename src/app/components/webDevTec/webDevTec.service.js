(function() {
  'use strict';

  angular
      .module('hwtwoAngularEpamgrillParty')
      .service('webDevTec', webDevTec);

  function webDevTec(employees) {
    var dataItems = [
      {
        'id': 1,
        'idemployees': 1,
        'iswill': '1',
        'notalone':false,
        'nameguest':''
      },
      {
        'id': 2,
        'idemployees': 2,
        'iswill': '2',
        'notalone': false,
        'nameguest':''
      },
      {
        'id': 3,
        'idemployees': 3,
        'iswill': '3',
        'notalone': false,
        'nameguest':''
      },
      {
        'id': 4,
        'idemployees': 4,
        'iswill': '1',
        'notalone': false,
        'nameguest':''
      },
      {
        'id': 5,
        'idemployees': 5,
        'iswill': '3',
        'notalone': false,
        'nameguest':''
      }
    ];
    
    var data = dataItems;

    this.getTec = getTec;
    this.getTecLite = getTecLite;
    this.addIteninArray = addIteninArray;
    this.clearData = clearData;
    this.createData = createData;

    function getTec() {
        data.forEach( function(item){ 
            item.employees = employees.GetEmployeesforId(item.idemployees); 
        } );     
      return data;
    }
    
    function getTecLite() {   
      return data;
    }    
    
    function clearData() {
        data = [];
    }
    
    function createData() {
        data = dataItems;
    } 
    
    function getNewId() {
        var newid = 0;
        for (var i = 1; i < data.length; i++) {
            if (data[i].id > newid) {
                newid = data[i].id;
            }
        }
        return newid+1;
    }
    
    function addIteninArray(param) {
        var newid = getNewId();
        param.id = newid;
        data.push(param);
    }
  }

})();
