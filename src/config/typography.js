import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';

oceanBeachTheme.scaleRatio = 1.5;
oceanBeachTheme.overrideThemeStyles = () => ({
    'a': {
        backgroundImage: 'none',
        textShadow: 'none'
    }
})
const typography = new Typography(oceanBeachTheme);

export default typography;