import { Injectable } from '@angular/core';
import { Company } from '../models/CompanyModels';
import { AppFeaturesEnum } from '../models/UtilsModels';
import { KeyValue } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Device } from '@capacitor/device';
import axios from "axios";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(
        private navController: NavController
    ) { }

    //  CNPJ a ser capturado no input da tela
    public cnpjToGet: string = '';

    //  Empresa encontrada na busca na API
    public searchedCompany: Company;
    
    //  Enum com as opções de tabs da página principal da aplicação
    public appFeaturesEnum = AppFeaturesEnum;

    //  Página atual sendo exibida
    public currentPage: string = 'Pesquisar'

    //  Método para passar como parâmetro no pipe do keyValue das iterações que envolvam Enum
    //  Exibe os valores na ordem inserida na classe Enum
    public originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>) : number => {
        return 0;
    }

    //  Guarda informação se o CNPJ é válido
    public isCNPJValid: boolean = true;

    //  Mensagem de erro a ser exibida
    public errorMessage: string = '';

    //  Tipo do erro (Inválido ou Inexistente)
    public errorType: string = 'Inválido';

    //  Controle de Loading
    public isLoading: boolean = false;

    //  Map dos rótulos retornados pela API
    public labels: Map<string, string> = new Map([
        ['status', 'Status'],
        ['ultima_atualizacao', 'Última Atualização'],
        ['cnpj', 'CNPJ'],
        ['tipo', 'Tipo'],
        ['porte', 'Porte'],
        ['razao', 'Razão Social'],
        ['fantasia', 'Nome Fantasia'],
        ['abertura', 'Data de Abertura'],
        ['natureza_juridica', 'Natureza Jurídica'],
        ['logradouro', 'Logradouro'],
        ['numero', 'Número'],
        ['complemento', 'Complemento'],
        ['cep', 'CEP'],
        ['bairro', 'Bairro'],
        ['municipio', 'Município'],
        ['uf', 'Estado'],
        ['email', 'Email'],
        ['telefone', 'Telefone'],
        ['efr', 'Ente Federativo Responsável'],
        ['situacao', 'Situação'],
        ['data_situacao', 'Data da Situação'],
        ['motivo_situacao', 'Motivo da Situação'],
        ['situacao_especial', 'Situação Especial'],
        ['data_situacao_especial', 'Data da Situação Especial'],
        ['capital_social', 'Capital Social'],
        ['nome', 'Nome'],
        ['qual', 'Qualificação'],
        ['pais_origem', 'País de Origem'],
        ['nome_rep_legal', 'Nome do Representante Legal'],
        ['qual_rep_legal', 'Qualificação do Representante Legal']
    ]);

    //  Parâmetros para formatação de data
    public dateTimeFormat: Intl.DateTimeFormatOptions = {
		hour  : `2-digit`,
		minute: `2-digit`,
		second: `2-digit`,
		day   : `2-digit`,
		month : `2-digit`,
		year  : `numeric`
	};

    //  Map com as tabs e os seus status
    public tabsMap: Map<string, boolean> = new Map([
        ['Menu',      false],
        ['Pesquisar',  true]
    ]);

    //  Exibir Loading
    public loadingOn(): void {
        this.isLoading = true;
    }

    //  Fechar Loading
    public loadingOff(): void {
        this.isLoading = false;
    }
    
    //  Buscar informações da empresa usando o CNPJ inserido
    public async searchCompany(): Promise<void> {
        this.loadingOn();
        this.isCNPJValid = true;

        if(!Boolean(this.cnpjToGet)){
            this.changeValidationFields(
                false, 'O CNPJ que você pesquisou é inválido! Volte, revise os valores e tente novamente.', 'Inválido'
            );

            return;
        };

        this.cnpjToGet = this.cnpjToGet.replace(/\D/g, '');
        
        if(!this.validateCNPJ()){
            this.changeValidationFields(
                false, 'O CNPJ que você pesquisou é inválido! Volte, revise os valores e tente novamente.', 'Inválido'
            );

            return;
        }
        
        //  Guardar o retorno da requisição da API
        let returnFromAPI;
        
        try {

            //  Modificar URLs de acesso dependendo do tipo de dispositivo usado
            if((await Device.getInfo()).platform == 'web'){
                returnFromAPI = (await axios.get(`/api/${this.cnpjToGet}`));

            } else if((await Device.getInfo()).platform == 'android'){
                returnFromAPI = (await axios.get(`https://thingproxy.freeboard.io/fetch/https://receitaws.com.br/v1/cnpj/${this.cnpjToGet}`));
            }

            console.log(returnFromAPI.data)

            if (returnFromAPI.data.status != 'ERROR') {
                const data = returnFromAPI.data;

                const obj: Company = {
                    cnpj                  : data.cnpj,
                    razao                 : data.nome,
                    fantasia              : data.fantasia,
                    tipo                  : data.tipo,
                    porte                 : data.porte,
                    abertura              : data.abertura,
                    natureza_juridica     : data.natureza_juridica,
                    logradouro            : data.logradouro,
                    numero                : data.numero,
                    complemento           : data.complemento,
                    cep                   : data.cep,
                    bairro                : data.bairro,
                    uf                    : data.uf,
                    municipio             : data.municipio,
                    email                 : data.email,
                    telefone              : data.telefone,
                    efr                   : data.efr,
                    situacao              : data.situacao,
                    data_situacao         : data.data_situacao,
                    motivo_situacao       : data.motivo_situacao,
                    situacao_especial     : data.situacao_especial,
                    data_situacao_especial: data.data_situacao_especial,
                    capital_social        : data.capital_social,
                    status                : data.status,
                    ultima_atualizacao    : new Date(data.ultima_atualizacao).toLocaleDateString(`pt-BR`, this.dateTimeFormat),
                    atividade_principal   : data.atividade_principal.map(rawData => ({
                                                code: rawData.code,
                                                text: rawData.text
                                            })),
                    atividades_secundarias: data.atividades_secundarias.map(rawData => ({
                                                code: rawData.code,
                                                text: rawData.text
                                            })),
                    qsa                   : data.qsa.map(rawData => ({
                                                nome          : rawData.nome,
                                                qual          : rawData.qual,
                                                pais_origem   : rawData.pais_origem,
                                                nome_rep_legal: rawData.nome_rep_legal,
                                                qual_rep_legal: rawData.qual_rep_legal
                                            }))
                };

                this.searchedCompany = obj;
                
            } else {
                this.changeValidationFields(
                    false, returnFromAPI.data.message, 'Outros'
                );
            }
        } catch (error: any) {

            console.log('error');
            console.log(error);

            this.changeValidationFields(
                false, 'Desculpe! Nenhum resultado foi encontrado com esse CNPJ. Pesquise novamente!', 'Inexistente'
            );

            if(error.response.status == 429){
                this.changeValidationFields(
                    false, 'Excesso de buscas! Tente novamente em 1 minuto.', 'Outros'
                );
            }
        }

        this.loadingOff();
    }

    //  Mudar valores dos campos de validação e mensagens de erro da entrada do CNPJ
    public changeValidationFields(isCNPJValid: boolean, errorMessage: string, errorType: string){
        this.loadingOff();
        
        this.isCNPJValid  = isCNPJValid;
        this.errorMessage = errorMessage;
        this.errorType    = errorType;
    }

    //  Valida o CNPJ antes de realizar a busca na API
    public validateCNPJ() : boolean {
        if(!Boolean(this.cnpjToGet)){
            return false;
        }

        const arr: number[] = this.cnpjToGet.split('').map(x => Number.parseInt(x));
        
        const firstResult = 
            (
                arr[0] * 5 + arr[1] * 4 + arr[2] * 3 + arr[3] * 2 + arr[4]  * 9 + arr[5]  * 8 +
                arr[6] * 7 + arr[7] * 6 + arr[8] * 5 + arr[9] * 4 + arr[10] * 3 + arr[11] * 2
            ) % 11;

        if (
            (firstResult == 0 || firstResult == 1) && 
            arr[12] != 0
        ) {
            return false;
        }


        if (firstResult >= 2 && 11 - firstResult != arr[12]) {
            return false;
        }


        const secondResult = 
            (
                arr[0] * 6 + arr[1] * 5 + arr[2] * 4 + arr[3] * 3 + arr[4]  * 2 + arr[5]  * 9 +
                arr[6] * 8 + arr[7] * 7 + arr[8] * 6 + arr[9] * 5 + arr[10] * 4 + arr[11] * 3 + arr[12] * 2
            ) % 11;

        if (
            (secondResult == 0 || secondResult == 1) && 
            arr[13] != 0
        ) {
            return false;
        }


        if (secondResult >= 2 && 11 - secondResult != arr[13]) {
            return false;
        }

        return true;        
    }

    //  Atualiza o Map de status das tabs a cada nova seleção
    public updateTabsMap(selectedTabName: string){
        for(const tab of this.tabsMap.keys()){
            this.tabsMap.set(tab, false);
        }

        this.tabsMap.set(selectedTabName, true);
    }

    //  Retorna se a Tab em questão está selecionada ou não
    public getSelectedTabStatus(tabName: string) : boolean | undefined {
        return this.tabsMap.get(tabName);
    }

    //  Carrega página escolhida através das tabs
    public loadChosenPageFromTabs(page: string) : void{
        if(page == 'Menu'){
            this.navController.navigateForward('home');
            return;
        }
        this.currentPage = page;
    }
}