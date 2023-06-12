import { Injectable } from '@angular/core';
import { AppFeaturesEnum } from '../models/UtilsModels';
import { KeyValue } from '@angular/common';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(
        private navController: NavController
    ) { }
    
    //  Enum com as opções de tabs da página principal da aplicação
    public appFeaturesEnum = AppFeaturesEnum;

    //  Página atual sendo exibida
    public currentPage: string = 'Pesquisar'

    //  Método para passar como parâmetro no pipe do keyValue das iterações que envolvam Enum
    //  Exibe os valores na ordem inserida na classe Enum
    public originalOrder = (a: KeyValue<string, string>, b: KeyValue<string, string>) : number => {
        return 0;
    }

    //  Map com as tabs e os seus status
    public tabsMap: Map<string, boolean> = new Map([
        ['Menu',      false],
        ['Pesquisar',  true]
    ]);

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