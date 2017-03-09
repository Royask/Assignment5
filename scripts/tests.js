QUnit.test('8.10 - DataStore', function(assert) {
    assert.expect(8);

    var ds = new App.DataStore();
    assert.ok(ds = new App.DataStore(), 'DataStore created.');
    assert.deepEqual(ds.add('m@bond.com', 'tea'), undefined, 'Order added.');
    assert.deepEqual(ds.add('james@bond.com', 'eshpressho'), undefined, 'Order added.');
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea',
        'james@bond.com': 'eshpressho'
    }, 'All objects listed');
    assert.deepEqual(ds.remove('james@bond.com'), undefined, 'Order removed.');
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea'
    }, 'All objects listed');
    assert.equal(ds.get('m@bond.com'), 'tea', 'Get m@bond.com');
    assert.deepEqual(ds.get('james@bond.com'), undefined, 'Deleted james@bond.com successful.');
});

QUnit.test(' 8.32 - Truck', function(assert) {
    assert.expect(2);

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });

    myTruck.printOrders();

    assert.deepEqual(myTruck.getAllTruck(), {
        'me@goldfinger.com': {
            'coffee': 'double mocha',
            'emailAddress': 'me@goldfinger.com'
        },
        'dr@no.com': {
            'coffee': 'decaf',
            'emailAddress': 'dr@no.com'
        },
        'm@bond.com': {
            'coffee': 'earl grey',
            'emailAddress': 'm@bond.com'
        }
    });
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    myTruck.printOrders();
    assert.deepEqual(myTruck.getAllTruck(), {
        'me@goldfinger.com': {
            'coffee': 'double mocha',
            'emailAddress': 'me@goldfinger.com'
        }
    });

});
