import htmlIcon from '../icons/html.svg';
import cssIcon from '../icons/css.svg';
import jsIcon from '../icons/js.svg';
import typeScriptIcon from '../icons/typescript.svg';
import reactIcon from '../icons/react.svg';
import gitIcon from '../icons/git-black.svg';

import javaIcon from '../icons/java-black.svg';
import mysqlIcon from '../icons/mysql-black.svg';
import githubIcon from '../icons/github-logo.svg';
import bootstrapIcon from '../icons/bootstrap.svg';

import testTitulo from '../imgs/tituloTest.png';
import moduloI from '../imgs/CertificadoI.png';
import moduloII from '../imgs/CertificadoII.png';
import ceprotec from '../imgs/CeprotecCertificado.png';
import jobs from '../imgs/JobsCetificado.png';

import expandModuloI from '../imgs/ExpandModuloI.png';
import expandModuloII from '../imgs/ExpandModuloII.png';
import expandJobs from '../imgs/ExpandJobs.png';
import expandCeprotec from '../imgs/ExpandCeprotec.png';

const certificates = [
  { imgSrc: testTitulo, alt: 'Titulo Cibertec', expandSrc: testTitulo },
  { imgSrc: moduloI, alt: 'Modulo I', expandSrc: expandModuloI },
  { imgSrc: moduloII, alt: 'Modulo II', expandSrc: expandModuloII },
  { imgSrc: ceprotec, alt: 'Ceprotec', expandSrc: expandCeprotec },
  { imgSrc: jobs, alt: 'Jobs', expandSrc: expandJobs },
];

const skillsIcons = [
  { src: htmlIcon, alt: 'htmlIcon' },
  { src: cssIcon, alt: 'cssIcon' },
  { src: jsIcon, alt: 'jsIcon' },
  { src: typeScriptIcon, alt: 'typeScriptIcon' },
  { src: reactIcon, alt: 'reactIcon' },
  { src: gitIcon, alt: 'gitIcon' },
];

const otherSkillsIcons = [
  { src: bootstrapIcon, alt: 'bootstrapIcon' },
  { src: githubIcon, alt: 'githubIcon' },
  { src: mysqlIcon, alt: 'mysqlIcon' },
  { src: javaIcon, alt: 'javaIcon' },
];

export { certificates, skillsIcons, otherSkillsIcons };
