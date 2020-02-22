# NodeCRUD

RESTful API using Node.JS


### Prerequisites

```
Node.js
MySQL
```

### Installing

```
npm install
```

Create a new database in MySQL and run this SQL query to build a new table.

```
CREATE TABLE `users` (
`userId` int(11) NOT NULL AUTO_INCREMENT,
`username` varchar(250) NOT NULL,
`email` varchar(250) NOT NULL,
`phone_number` varchar(250) NOT NULL,
`skillsets` varchar(500) NOT NULL,
`hobby` varchar(500) NOT NULL,
`dateCreated` datetime NOT NULL,
`dateUpdated` datetime NOT NULL,
PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
```

Demo: 

## Built With

* [Node.js](https://nodejs.org/en/docs/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## Authors

* **Mohammad Nurdin bin Norazan** - *Initial work* - [Nurdin's Profile](http://www.revivalx.com/my/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
