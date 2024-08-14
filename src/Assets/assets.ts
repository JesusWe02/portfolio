import htmlIcon from "../icons/html.svg";
import cssIcon from "../icons/css.svg";
import jsIcon from "../icons/js.svg";
import typeScriptIcon from "../icons/typescript.svg";
import reactIcon from "../icons/react.svg";
import gitIcon from "../icons/git-black.svg";

import javaIcon from "../icons/java-black.svg";
import mysqlIcon from "../icons/mysql-black.svg";
import githubIcon from "../icons/github-logo.svg";
import bootstrapIcon from "../icons/bootstrap.svg";

import titulo from "../imgs/titulo.jpg"
import moduloI from "../imgs/CertificadoI.png";
import moduloII from "../imgs/CertificadoII.png";
import ceprotec from "../imgs/CeprotecCertificado.png";
import jobs from "../imgs/JobsCetificado.png";

import expandModuloI from "../imgs/ExpandModuloI.png";
import expandModuloII from "../imgs/ExpandModuloII.png";
import expandJobs from "../imgs/ExpandJobs.png";
import expandCeprotec from "../imgs/ExpandCeprotec.png";

const certificates = [
  { imgSrc: titulo, alt: "Titulo Cibertec", expandSrc: titulo },
  { imgSrc: moduloI, alt: "Modulo I", expandSrc: expandModuloI },
  { imgSrc: moduloII, alt: "Modulo II", expandSrc: expandModuloII },
  { imgSrc: jobs, alt: "Jobs", expandSrc: expandJobs },
  { imgSrc: ceprotec, alt: "Ceprotec", expandSrc: expandCeprotec },
];

const skillsIcons = [
  {
    src: htmlIcon,
    alt: "htmlIcon",
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    src: cssIcon,
    alt: "cssIcon",
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    src: jsIcon,
    alt: "jsIcon",
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    src: typeScriptIcon,
    alt: "typeScriptIcon",
    url: "https://www.typescriptlang.org/",
  },
  { src: reactIcon, alt: "reactIcon", url: "https://es.react.dev/" },
  { src: gitIcon, alt: "gitIcon", url: "https://git-scm.com/" },
];

const otherSkillsIcons = [
  {
    src: bootstrapIcon,
    alt: "bootstrapIcon",
    url: "https://getbootstrap.com/",
  },
  { src: githubIcon, alt: "githubIcon", url: "https://github.com/" },
  { src: mysqlIcon, alt: "mysqlIcon", url: "https://www.mysql.com/" },
  { src: javaIcon, alt: "javaIcon", url: "https://dev.java/" },
];

export { certificates, skillsIcons, otherSkillsIcons };
