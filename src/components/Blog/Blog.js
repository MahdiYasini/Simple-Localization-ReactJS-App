import React from 'react';
import { makeStyles,  Button } from '@material-ui/core';
import englishLogoUrl from '../../assets/images/English_Logo.png'
import mainImageUrl from '../../assets/images/main.jpg'
import zarif from '../../assets/images/zarif.jpg'

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    navbar: {
        background: "#ccc",
    },
    container: {
        display: "flex",
        maxWidth: "1100px",
        margin: "0 auto",
    },
    logoImg: {
        display: 'block',
        margin: "0 auto",
        width: theme.spacing(17),
        height: theme.spacing(17),
    },
    menu: {
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        margin: "0",
        flex: "2",
        "& li": {
            flex: "1",
        },
        "& li a": {
            padding: "14% 0",
            cursor: "pointer",
            display: "block",
            color: "#232323",
            textAlign: "center",
            textDecoration: "none"
        },

        "& li:hover": {
            background: "#444",
            color: "#f7c08a",
            textShadow: "#FC0 1px 0 10px",
            "& a": {
                color: "#ccc"
            }
        },
    },
    chooseLanguage: {
        flex: "2",
        padding: "1% 0"

    },
    chooseLanguageButton: {
        margin: "1%"
    },
    mainMessage: {
        background: `url(${mainImageUrl}) no-repeat center center/cover`,
        height: "72.6vh",
        display: "flex"
    },
    mainMessageDiv:{
        flex: '1'
    },
    zarifImage: {
        display: "block",
        borderRadius: "5% 20% 5%",
        width: theme.spacing(70),
        height: theme.spacing(50),
        margin: "8% auto"
    },
    zarifMessageDiv:{
        textAlign: "center",
        fontSize: "1.8rem",
        margin: "0 auto",
        padding: "20% 5%",
        "& p": {
            backdropFilter: "blur(4px) contrast(.9)"
        }
    }
}));

const Blog = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (lang) => {
        i18n.changeLanguage(lang);
    }
    return (
        <>
            <header className={classes.navbar}>
                <img src={englishLogoUrl} alt="logo" className={classes.logoImg} />
                <div className={classes.container}>
                    <div className={classes.chooseLanguage}>
                        <Button className={classes.chooseLanguageButton}
                            variant="outlined"
                            color="primary"
                            onClick = {() => changeLanguageHandler('fa')}>
                            فارسی
                        </Button>
                        <Button className={classes.chooseLanguageButton}
                            variant="outlined"
                            color="primary"
                            onClick = {() => changeLanguageHandler('ar')}>
                            عربي
                        </Button>
                        <Button className={classes.chooseLanguageButton}
                            variant="outlined"
                            color="primary"
                            onClick = {() => changeLanguageHandler('en')}>
                            English
                        </Button>
                    </div>
                    <ul className={classes.menu}>
                        <li><a href="/">{t('menubar.home')}</a></li>
                        <li><a href="/">{t('menubar.ConsularAffairs')}</a></li>
                        <li><a href="/">{t('menubar.ElectronicVisa')}</a></li>
                    </ul>
                </div>
            </header>
            <section className = {classes.mainMessage}>
                <div className = {classes.mainMessageDiv}>
                        <div className = {classes.zarifMessageDiv}>
                            <p>
                            {t('message')}
                            </p>
                        </div>
                </div>
                <div className = {classes.mainMessageDiv}>
                    <img className = {classes.zarifImage} src = {zarif} alt = "Javad Zarif"/>
                </div>
            </section>
        </>
    )
}

export default Blog;
