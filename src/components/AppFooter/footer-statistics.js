import React from 'react';

const FooterStatistics = ({filmsCount}) => {
    return (
        <section className="footer__statistics">
            <p>{filmsCount} movies inside</p>
        </section>
    );
};

export default FooterStatistics;
