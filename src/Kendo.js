import React, { useEffect, useState } from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { DropDownList } from "@progress/kendo-react-dropdowns";


function KendoPage() {
    const locales = [
        {
            language: "en-US",
            locale: "en",
        },
        {
            language: "es-ES",
            locale: "es",
        },
    ];
    const [data, setData] = useState("");
    const [currentLocale, setCurrentLocale] = React.useState(locales[0]);


    let _export;
    let _pdfExport;
    const exportExcel = () => {
        _export.save();
    };
    const exportPDF = () => {
        _pdfExport.save();
    };

    useEffect(() => {
        fetch('https://api.github.com/users/hadley/orgs')
            .then(res => res.json())
            .then(result => setData(result))
    });
    return (
        <div>
            <ExcelExport data={data}
                ref={(exporter) => {
                    _export = exporter;
                }}>
                <Grid data={data}
                    style={{
                        height: "700px",
                    }}
                    sortable={true}
                    filterable={true}
                    groupable={true}
                    reorderable={true}
                    pageable={{
                        buttonCount: 4,
                        pageSizes: true,
                    }}>
                    <GridToolbar>
                        <DropDownList
                            value={currentLocale}
                            textField="language"
                            onChange={(e) => {
                                setCurrentLocale(e.target.value);
                            }}
                            data={locales}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <button
                            title="Export to Excel"
                            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                            onClick={exportExcel}
                        >
                            Export to Excel
                        </button>
                        &nbsp;
                        <button
                            title="Export to Pdf"
                            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                            onClick={exportPDF}
                        >
                            Export to PDF
                        </button>
                    </GridToolbar>
                    <GridColumn field="id" title="ID" />
                    <GridColumn field="login" title="LOGIN" />
                    <GridColumn field="url" title="URL" />
                    <GridColumn field="events_url" title="EventURL" />
                    <GridColumn field="node_id" title="NODEID" />
                    <GridColumn field="repos_url" title="DATA" />
                </Grid>
            </ExcelExport>
            <GridPDFExport
                ref={(element) => {
                    _pdfExport = element;
                }}
                margin="1cm">
                {
                    <Grid data={data}>
                        <GridColumn field="id" title="ID" />
                        <GridColumn field="login" title="LOGIN" />
                        <GridColumn field="url" title="URL" />
                        <GridColumn field="events_url" title="EventURL" />
                        <GridColumn field="node_id" title="NODEID" />
                        <GridColumn field="repos_url" title="DATA" />
                    </Grid>
                }

            </GridPDFExport>
        </div>

    );
}
export default KendoPage

