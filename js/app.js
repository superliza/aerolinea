var airlineSeats = [
false,
false,
false,
false,
false,
false,
false,
false,
false,
false
];

var busySeats = 0;
var paintSeats = function (array) {
  var containerSeats = document.getElementById('seats');
  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};

var reserve = function () {
  var button = document.getElementById('button');
  button.addEventListener('click', chooseZone);
};

var chooseZone = function () {
  var chioce = prompt (
    '¿En qué zona quieres reservar tus asientos? '
  );

  if (choice == 1) {
    checkFirstClassZone ();
  } else if(choice == 2) {
    checkEconomicZone ();
  } else {
    alert('Ingresa un número válido');
  };

var checkFirstClassZone = function () {
  var zone = "Primera Clase";
  for (var index = 0; index < 4; index++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reserveSeat(index);
      paintTicket(index, zone);
      busySeats++;
      break;
    } else if (index == 3 && airlineSeats[index] == true) {
      reasignEconomicZone(zone);
    }
  }
};

var ckeckEconomicZone = function() {
  var zone = 'Clase Económica';
  for (var index = 4; index < 10; index++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reserveSeat[index] = true;
      reserveSeat(index);
      paintTicket(index, zone);
      busySeats++;
      break;
    } else if (index == 9 && airlineSeats[index] == true) {
      reasignEconomicZone(zone);
    }
  }
};

var reserveSeat = function(indexToPaint) {
  var seat = document.getElementByClassName('seats');
  set[indexToPaint].textContent = 'Ocupado';
};

var reasignEconomicZone = function(zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm (
      'Ya no quedan asientos disponibles en zona '+ zone +
      ' :( \n Quieres reservar en clase Economica '
    );
    if (reasign == true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};

var reasignFirstClassZone = function(zone) {
  if(busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm (
      'Ya no quedan asientos disponibles en zona ' +
      zone +
      ' :( \n Quieres reservar en Primera Clase'
    );
    if (reasign = true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};

var paintTicket = function(index, zone) {
  var containerTickets = document.creatElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'tickets';
  var title = document.createElement('p');
  var reservedSeating = document.creatElement('p');
  var zoneClass = document.creatElement('p');
  title.textContent = 'Pase de abordar';
  reservedSeating.textContent = 'Num. de asiento ' + (index + 1);
  zoneClass.textContent = 'Clase ' + zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
};

var noSeats = function() {
  alert('Lo sentimos, no hay asientos disponibles :(');
};

var nextFlight = function() {
  alert('Nuestro próximo vuelo sale en 3 horas');
};

paintSeats(airlineSeats);
reserve();
