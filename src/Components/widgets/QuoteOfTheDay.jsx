import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QuoteOfTheDay = ({ quote, title, loading, error }) => {
    return (
        <div className="quote-sec child-section">
            <p className="title">{title}</p>

            <div className="quote-wrapper">

                {error && <p className="quote">{error}</p>}

                {loading && <p className="quote">Loading...</p>}

                {!error && !loading && !quote && <p className="quote">Geen quotes gevonden.</p>}

                {!error && !loading && quote && (
                    <>
                        <FontAwesomeIcon className="big" icon={faQuoteLeft} />
                        <p className="quote">{quote}</p>
                        <FontAwesomeIcon className="small" icon={faQuoteLeft} />
                    </>
                )}
            </div>
        </div>
    )
}

export default QuoteOfTheDay