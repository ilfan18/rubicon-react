module.exports = (componentName) => ({
	content: `// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ${componentName}Props } from "./${componentName}.types";

const StyledDiv = styled.div\`

\`;

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <StyledDiv data-testid="${componentName}" className="foo-bar">{foo}</StyledDiv>
); 

export default ${componentName};

`,
	extension: `.tsx`,
});
