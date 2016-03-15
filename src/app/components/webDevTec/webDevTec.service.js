(function() {
  'use strict';

  angular
      .module('hwtwoAngularEpamgrillParty')
      .service('webDevTec', webDevTec);

  function webDevTec(employees) {
    var data = [
      {
        'id': '1',
        'idemployees': '1',
        'iswill': '1',
        'notalone':'false',
        'nameguest':''
      },
      {
        'id': '2',
        'idemployees': '2',
        'iswill': '2',
        'notalone':'false',
        'nameguest':''
      },
      {
        'id': '3',
        'idemployees': '3',
        'iswill': '3',
        'notalone':'false',
        'nameguest':''
      },
      {
        'id': '4',
        'idemployees': '4',
        'iswill': '1',
        'notalone':'false',
        'nameguest':''
      },
      {
        'id': '5',
        'idemployees': '5',
        'iswill': '3',
        'notalone':'false',
        'nameguest':''
      }
    ];

    this.getTec = getTec;
    this.addIteninArray = addIteninArray;

    function getTec() {
        data.forEach( function(item){ 
            item.employees = employees.GetEmployeesforId(item.idemployees); 
        } );
      return data;
    }
    
    function addIteninArray(param) {
        var newid = Math.max(data.id);
        console.log(newid);
        param.id = newid;
        data.push(param);
    }
  }

})();
