export interface Company {
    status                : string;                 //  Status
    ultima_atualizacao    : string;                 //  Data da última atualizaçãona Receita
    cnpj                  : string;                 //  CNPJ
    tipo                  : string;                 //  Tipo
    porte                 : string;                 //  Porte
    razao                 : string;                 //  Razão Social
    fantasia              : string;                 //  Nome Fantasia
    abertura              : string;                 //  Data de Abertura
    natureza_juridica     : string;                 //  Natureza Jurídica
    logradouro            : string;                 //  Logradouro
    numero                : string;                 //  Número
    complemento           : string;                 //  Complemento
    cep                   : string;                 //  CEP
    bairro                : string;                 //  Bairro
    municipio             : string;                 //  Município
    uf                    : string;                 //  Estado
    email                 : string;                 //  Email
    telefone              : string;                 //  Telefone
    efr                   : string;                 //  Ente Federativo Responsável
    situacao              : string;                 //  Situação
    data_situacao         : string;                 //  Data da Situação
    motivo_situacao       : string;                 //  Motivo da Situação
    situacao_especial     : string;                 //  Situação Especial
    data_situacao_especial: string;                 //  Data da Situação Especial
    capital_social        : string;                 //  Capital Social
    atividade_principal   : AtividadePrincipal[];   //  Atividade Principal 
    atividades_secundarias: AtividadeSecundaria[];  //  Atividades Secundárias
    qsa                   : Socio[];                //  Quadro Societário
}

export interface AtividadePrincipal {
    code: string;   //  Código
    text: string;   //  Descrição
}

export interface AtividadeSecundaria {
    code: string;   //  Código
    text: string;   //  Descrição
}

export interface Socio {
    nome          : string;     //  Nome
    qual          : string;     //  Qualificação
    pais_origem   : string;     //  País de Origem
    nome_rep_legal: string;     //  Nome do Representante Legal
    qual_rep_legal: string;     //  Qualificação do Representante Legal
}