import styles from "@/styles/(main)/search/search.module.scss";

import { OutlineBlock, OutlineSubBlock } from "@/components/ui/outlineBlocks";
import { Search, Select, MultiSelect } from "@/components/ui/input";
import { OutlineButton, BlockButton } from "@/components/ui/buttons";

import RemapLogo from '$/assets/icons/remap.svg'
import ClearLogo from '$/assets/icons/clear.svg'

export default async function Mods() {

    const sort_option = [
        {
          name: "Возрастанию",
          id: "down-up"
        },
        {
          name: "Загрузкам",
          id: "downloads"
        }, 
        {
          name: "Новизне",
          id: "newest"
        }, 
        {
          name: "Обновлению",
          id: "update"
        }, 
      ]
      
      const selectedOption = 
        {
          name: "Возрастанию",
          id: "down-up"
        }

        const sort_optionPag = [
          {
            name: "10",
            id: "10"
          },
          {
            name: "20",
            id: "20"
          }, 
          {
            name: "30",
            id: "30"
          }, 
          {
            name: "40",
            id: "40"
          }, 
        ]
        
        const selectedOptionPag = 
          {
            name: "10",
            id: "10"
          }

    return (
        <>
            <div className={styles.search_block}>
              <div className={styles.search_settings}>
                <OutlineBlock style={{padding: "0.8rem"}}>
                  <div className={styles.settings_content}>
                    <div className={styles.DeleteFiltersButtonComponent}>
                      <BlockButton>
                        <ClearLogo/>
                        Удалить фильтры
                      </BlockButton>
                    </div>
                  </div>
                </OutlineBlock>
              </div>
              <div className={styles.search}>
                <div className={styles.search_panel}>
                  <OutlineBlock style={{padding: "0.8rem"}}>
                      <div className={styles.search_panel_layout}>
                          <div className={styles.SearchComponent}>
                            <Search/>
                          </div>
                          <p>Сортировать по</p>
                          <div className={styles.SortComponent}>
                            <Select  info={{label: "Сортировка", name: "sort"}} options={sort_option} standartSelectedOption={selectedOption}/>
                          </div>
                          <p>Показать на странице</p>
                          <div className={styles.PaginationCountComponent}>
                            <Select  info={{label: "Сортировка", name: "sort"}} options={sort_optionPag} standartSelectedOption={selectedOptionPag}/>
                          </div>
                          <div className={styles.RemapButtonComponent}>
                            <BlockButton>
                              <RemapLogo/>
                            </BlockButton>
                          </div>
                      </div>
                  </OutlineBlock>
                </div>
                <div className={styles.search_result}>
                </div>
              </div>
            </div>
        </>
    )
}