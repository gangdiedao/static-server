module.exports = {
    apps: [{
            "name": 'www_static.keketour.com',
            "script": 'bin/server.js',
            "env": {
                "PORT": 5000
            }
        },
        {
            "name": 'demo_static.keketour.com',
            "script": 'bin/server.js',
            "env": {
                "PORT": 5003
            }
        },
        {
            "name": 'net_static.keketour.com',
            "script": 'bin/server.js',
            "env": {
                "PORT": 5000
            }
        },
        {
            "name": 'test_static.keketour.com',
            "script": 'bin/server.js',
            "env": {
                "PORT": 5001
            }
        },
        {
            "name": 'test2_static.keketour.com',
            "script": 'bin/server.js',
            "env": {
                "PORT": 5002
            }
        }
    ]
}