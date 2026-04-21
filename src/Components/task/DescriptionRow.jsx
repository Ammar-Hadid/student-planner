import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DescriptionRow = ({ icon, label, value, color }) => {
    const className = color ? 'colored' : '';

    return (
        <div className="row">
            <dt>
                <FontAwesomeIcon icon={icon} />
                {label}
            </dt>

            <dd className={className} style={color ? { '--dd-color': color } : undefined}>
                <p>{value}</p>
            </dd>
        </div>
    )
}

export default DescriptionRow