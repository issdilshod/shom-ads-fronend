const ButtonHref = ({icon, variant, href, text}) => {

    /**
     * icon = an example `brand-google-play`
     * variant = an example `primary`
     * href = an example `https://example.com`
     * text = an example `Button`
     */

    return (
        <a className={`h-btn h-btn-${variant}`} href={href}>
            <i className={`ti ti-${icon}`}></i>
            <span>{text}</span>
        </a>
    )
} 

export default ButtonHref;