import React from 'react';
import Layout from '@theme/Layout';

import "./styles/OurApi.css";

export default function OurApi() {
  return (
    <Layout>
      <main className='api-main'>
          <div className="api-container">
            <br/>
            <center>
            <h1><u>GBADs Data Portal Documentation</u></h1>
            </center>

            <p  style={{marginLeft:"3%", marginRight:"3%", fontSize:"20pt"}}>
            <b>Introduction</b>

            </p><p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            Welcome to the GBADs Data Portal and API.  Through this portal you can retrieve any data contained in the GBADs public databases.  This public data portal does not require a login or API tokens.  The Portal currently contains data from OIE, FAOSTAT, and the Central Statistical Agency of Ethiopia.  Other data will be added in the future.  

            This introductory page contains information on how to use the Portal and has a Quick API Guide with common API calls that you can use and 
            adapt.
            </p>

            <p  style={{marginLeft:"3%", marginRight:"3%", fontSize:"20pt"}}>
            <b>Using the API</b>
            </p>

            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            You can use the API in three (3) different ways:
            </p><ol>
            <li> As an HTML command where the result will be an html page or a CSV file:
            <ul>
                <li> <i>http://gbadske.org:9000/dataportal/</i>
                </li><li> <i>http://gbadske.org:9000/GBADsTables/public?format=html</i>
                </li><li> <i>http://gbadske.org:9000/GBADsLivestockPopulation/faostat?year=2017&amp;country=Canada&amp;species=*&amp;format=file</i>
            </li></ul>
            <br/>
            </li><li> As a cURL command line tool where the result will be text:
            <ul>
            <li> On Unix-based systems (Mac OSX, Linux): 
                <ul>
                    <li> <i>curl "http://gbadske.org:9000/GBADsTables/public?format=text"</i>
                        </li><li> <i>curl "http://gbadske.org:9000/GBADsLivestockPopulation/faostat?year=2017&amp;country=Canada&amp;species=*&amp;format=file"</i> <br/>where the reponse is: <p> country,year,species,population<br/>
                            "Canada","2017","Beehives","701033"<br/>
                            "Canada","2017","Cattle","11535000"<br/>
                            "Canada","2017","Chickens","170120000"<br/>
                            "Canada","2017","Ducks","1499000"<br/>
                            "Canada","2017","Geese and guinea fowls","323000"<br/>
                            "Canada","2017","Goats","30050"<br/>
                            "Canada","2017","Horses","397870"<br/>
                            "Canada","2017","Mules","4000"<br/>
                            "Canada","2017","Pigs","13935000"<br/>
                            "Canada","2017","Sheep","813900"<br/>
                            "Canada","2017","Turkeys","5687000"<br/>
                            "Canada","2017","Cattle and Buffaloes","11535000"<br/>
                            "Canada","2017","Poultry Birds","177629000"<br/>
                            "Canada","2017","Sheep and Goats","843950"<br/>
                            </p>
                </li></ul>
            </li><li> On Windows systems using Powershell where the result will be text:
                <ul>
                    <li> <i>curl.exe http://gbadske.org:900/GBADsTable/public?table_name=livestock_production_faostat&amp;format=text</i>
                </li></ul>
            </li></ul>
            <br/>
            </li><li> In an R or Python program:
            <ul>
            <li> R examples are in GitHub repo (reference to be added)
            </li><li> Python example (apiExample.py in GitHub repo - link to be added)
            </li></ul>
            </li></ol>
            <p></p>

            <p  style={{marginLeft:"3%", marginRight:"3%", fontSize:"20pt"}}>
            <b>Quick API Guide</b>
            </p>
            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            These commands are designed to make specific population queries of <b>OIE</b> and <b>FAOSTAT</b> population data and return <b>"country, year, species, population"</b>
            </p><ul>
                <li> Get <b>OIE</b> population data on <b>Cattle</b> for all years for a specific country, <i>e.g. Germany</i> and return it as a CSV file<br/>
                <i>http://gbadske.org:9000/GBADsLivestockPopulation/oie?species=Cattle&amp;year=*&amp;country=Germany&amp;format=file</i>
                <br/><br/>
                </li><li> Get <b>FAOSTAT</b> population data on <b>Sheep</b> for <b>2010</b> for a specific country, <i>e.g. Australia</i> and display as html<br/>
                <i>http://gbadske.org:9000/GBADsLivestockPopulation/faostat?species=Sheep&amp;year=2010&amp;country=Australia&amp;format=html</i>
                <br/><br/>
                </li><li> Get <b>OIE</b> population data on <b>all Poultry categories</b> populations for all years for a specific country, <i>e.g. Switzerland</i> and return it as a CSV file<br/>
                <i>http://gbadske.org:9000/GBADsLivestockPopulation/oie?species=Poultry&amp;year=*&amp;country=Switzerland&amp;format=file</i>
                <br/><br/>
            </li></ul>
            <p></p>

            <p  style={{marginLeft:"3%", marginRight:"3%", fontSize:"20pt"}}>
            <b>API Commands Reference</b>
            </p>

            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            <i>http://gbadske.org:9000/dataportal/</i>
            </p><ul>
            <li> This will provide documentation about the GBADs Data Portal including how to use the API to the GBADs Public Database.
            </li><li> It will also give the status of the Data Portal.
            </li></ul>
            <p></p>

            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            <i>http://gbadske.org:9000/GBADsTables/public?format=html   |   text</i>
            </p><ul>
            <li> This command returns the names of all of the tables that exist in the GBADs Public Database. The informationis returned either as a HTML page or as text and this is indicated by the parameter format.  If format does not appear then the default is html.
            </li><li> Example commands:
            <ul>
                <li> <i>http://gbadske.org:9000/GBADsTables/public?format=html</i>
                </li><li> <i>http://gbadske.org:9000/GBADsTables/public?format=text</i>
            </li></ul>
            </li></ul>
            <p></p>

            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            <i>http://gbadske.org:9000/GBADsTable/public?table_name=table_name&amp;format=html   |   text</i>
            </p><ul>
            <li> This command returns the column/field names in the given table (<table_name>).  It will be returned as html or as text.
            </table_name></li><li> The type of return is designated by format but this is an optional parameter.  If format is not present then the response will be html.
            </li><li> The required parameter is table name.
            </li><li> Example commands:
            <ul>
                <li> <i>http://gbadske.org:9000/GBADsTable/public?table_name=eth_csa_goats_health&amp;format=html or http://gbadske.org:9000/GBADsTable/public?table_name=eth_csa_goats_health</i>
                </li><li> <i> http://gbadske.org:9000/GBADsTable/public?table_name=eth_csa_goats_health&amp;format=text</i>
            </li></ul>
            </li></ul>
            <p></p>

            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            <i>http://gbadske.org:9000/GBADsLivestockPopulation/data_source &#123;faostat   |   oie&#123;</i>
            </p><ul>
            <li> This commands retrieves data from one of the livestock population tables in the public database.
            </li><li> Currently (as of 2021-10-26) there are two livestock tables: faostat and oie.
            </li><li> The required parameters are:
            <ul>
            <li> data_source which is currently either faostat or oie
            </li><li> format which is either html or file
            </li></ul>
            </li><li> Optional parameters are:
            <ul>
            <li> year which can be a single year or an * which signifies all years and is the default if year does not appear as a parameter
            </li><li> country which can be a country name or an * which signifies all countries and is the default if country does not appear as a parameter
            </li><li> iso3 which is the country ISO code (3 characters) or an * which signifies all countries and is the default if iso3 does not appear as a parameter
            </li><li> <b>Special notes:</b> Only one of country or iso3 can appear since they refer to the same concept.  Also, currently the country/iso3 choice is only implemented for FAOSTAT and not OIE
            </li><li> species which can be a species name or an * which signifies all species and is the default if species does not appear as a parameter
            </li></ul>
            </li><li> Example commands:
            <ul>
                <li> <i>http://gbadske.org:9000/GBADsLivestockPopulation/faostat?year=2017&amp;country=Canada&amp;species=*&amp;format=html</i>
                        <ul>
                        <li> Returns population numbers for all species in Canada in the year 2017 from FAOSTAT (as html)
                        </li></ul>
                </li><li> <i>http://gbadske.org:9000/GBADsLivestockPopulation/oie?year=2017&amp;country=Canada&amp;species=*&amp;format=html</i>
                    <ul>
                        <li> Returns population numbers for all species in Canada in the year 2017 from OIE (as html)
                    </li></ul>
                </li><li> <i>http://gbadske.org:9000/GBADsLivestockPopulation/oie?year=*&amp;country=Canada&amp;species=Cattle&amp;format=html</i>
                    <ul>
                        <li> Returns population numbers for Cattle in Canada in all years from OIE (as html)
                    </li></ul>
                </li><li> <i>http://gbadske.org:9000/GBADsLivestockPopulation/faostat?iso3=AUS&amp;species=Cattle&amp;format=html</i>
                <ul>
                    <li> Returns population number for Cattle in Australia for all years from FAOSTAT (as html)
                </li></ul>
            </li></ul>
            </li></ul>
            <p></p>

            <p  style={{marginLeft:"5%", marginRight:"5%", fontSize:"14pt"}}>
            <i>http://gbadske.org:9000/GBADsPublicQuery/&#123;table_name&#123;</i>
            </p><ul>
            <li> <b>This command is still a work in progress - to be updated very soon!</b>
            </li><li> This command performs a general query on a table in the GBADs Public Database.
            </li><li> The required parameters are
            <ul>
            <li> table name
            </li><li> fields
            </li><li> query
            </li><li> format
            </li></ul>
            </li><li> Example commands:
            <ul>
                <li> <i>http://gbadske.org:9000/GBADsPublicQuery/livestock_production_faostat?fields=country,year,species,population&amp;query=year=2017%20AND%20species=%27Goats%27&amp;format=html</i>
                </li><li> <i>http://gbadske.org:9000/GBADsPublicQuery/livestock_production_faostat?fields=country,year,species,population&amp;query=year=2017%20AND%20species=%27Goats%27&amp;format=file</i>
            </li></ul>
            </li></ul>
            <p></p>
          </div>
      </main>
    </Layout>
  );
}
