import { Nav, initializeIcons } from '@fluentui/react';

const navigationStyles = {
    root: {
        width: 50,
        height: '100vh',
        boxSizing: 'border-box',
        overflowY: 'auto',
        //position: 'absolute',
        //backgroundColor: '#404040',
        position: 'fixed',
    },
};

const links = [
    {
        links: [
            {
                name: 'Home',
                key: 'key1',
                url: '/',
                iconProps: {
                    iconName: 'HomeSolid',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Decrypt',
                key: 'key2',
                url: '/decrypt',
                iconProps: {
                    iconName: 'Fingerprint',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Encrypt',
                key: 'key3',
                url: '/encrypt',
                iconProps: {
                    iconName: 'Lock12',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Fresh Start',
                key: 'key4',
                url: '/new',
                iconProps: {
                    iconName: 'QuickNote',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Guide',
                key: 'key5',
                url: '/guide',
                iconProps: {
                    iconName: 'BookAnswers',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        },
                    }
                }
            }, {
                name: 'GitHub',
                key: 'key6',
                url: 'https://github.com/saitamatp/pwd_utility_bak',
                iconProps: {
                    iconName: 'GitGraph',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        },
                    }
                }
            },
        ],
    },
];


function keySlect(){
    if (document.location.pathname ==='/decrypt')
        return 'key2'
        
}

const Navigation = () => {
    initializeIcons();
    return (
        <Nav
            groups={links}
            selectedKey={keySlect()}
            styles={navigationStyles}
        />
    );
};

export default Navigation;