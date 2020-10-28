import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Roy extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    // this.calRoyfun = this.calRoyfun.bind(this);

    this.state = {
      id: null,
      title: "",
      npages: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
      npages:e.target.value
    });
  }

  onChangeDescription(e) {
  console.log(e)

    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial(e) {

    console.log("agamji")

    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      npages:"",
      submitted: false
    });

    // npages:e.target.value

    console.log("agamjibbbb",this.state,e.target)

    
  }



//   calRoyfun(){
//     // npages: this.state.npages
//     console.log("AgamSi111r..,")


//   }


  render() {
    return (
        <div className="col-lg-12 royaltycalculator section_padding reset_section_padding_bottom">
        <div className>
          <div className="container royaltytitle">
            <div className="row justify-content-center">
              <h1>Calculate Author Earnings</h1>				
            </div>
            <div className="row justify-content-center">
              <p>Calculate your profit margins and set your ideal selling price.</p>
            </div>
            <div className="row justify-content-center">
              <span>Switch between Xpress and Guided Publishing</span>
            </div>
            <div className="row justify-content-center">
              <div className="button_container">
                <div id="switch_btns" className="activeDIY ">
                  <div id="bsh-switch_btns"><input className="tgl-sw tgl-sw-android tgl-sw-android-checked tgl-sw-active" id="android-switch_btns" type="checkbox" defaultChecked /><label className="btn-switch" htmlFor="android-switch_btns" id="sw-android-505785" data-state="true" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-nopadding">
                <div className="row">
                  <div className="col-lg-6 col-md-6 enterdetails col-md-nopadding col-md-padding-7">
                    <div className="col-lg-12 col-xl-11 ml-xl-auto col-md-padding-7 col-md-nopadding">
                      <div className="row">
                        <div className="col-lg-12"><h3>ENTER BOOK DETAILS</h3></div>
                        <form id="productionCost" className="formcontainer col-lg-12" method="post">
                            
                            <input type="hidden" name="VISITS" defaultValue={4} /><input type="hidden" name="ILANDPAGE" defaultValue="https%3A//notionpress.com/%3Fgclid%3DCjwKCAjwq_D7BRADEiwAVMDdHmAFRAv0kOkESPtTHddsW3x9ez7Iks3urMgZiUBc6p3vVR24-pDi_RoCfW4QAvD_BwE" /><input type="hidden" name="LREFERRER" defaultValue="https%3A//www.google.com/" /><input type="hidden" name="IREFERRER" defaultValue="https%3A//www.google.com/" /><input type="hidden" name="utm_device" defaultValue="c" /><input type="hidden" name="utm_matchtype" defaultValue="b" /><input type="hidden" name="UTERM" defaultValue="notionpress%20review" /><input type="hidden" name="UCONTENT" defaultValue={84487714960} /><input type="hidden" name="UCAMPAIGN" defaultValue={367129475} /><input type="hidden" name="UMEDIUM" defaultValue="search" /><input type="hidden" name="USOURCE" defaultValue="google" />
                          <input type="hidden" defaultValue="guided" name="publishingmode" />
                          <div className="get_values centerbox col-lg-12" style={{minHeight: '252px'}}>
                            <div className="row">										
                              <div className="col-lg-12">
                                <div className="row align-items-center" id={1}>
                                  <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding"><label>Number of Pages</label></div>
                                  <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                                    <span className="delimiter">:</span>

                                    {/* <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              /> */}
              


                                    <input type="number" id="npages" name="npages" required    />
                                    <div className="alert alert-danger hidealert" id="npagesrequired" style={{display: 'none'}}>
                                      Number of pages is required.
                                    </div>
                                    <div className="alert alert-danger hidealert" id="npagesnumeric" style={{display: 'none'}}>
                                      Number of pages has to be numeric.
                                    </div>
                                    <div className="alert alert-danger hidealert" id="npageslessthan100" style={{display: 'none'}}>
                                      Pages should be between 4 to 700.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="row align-items-center" id={2}>
                                  <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding"><label>Book Format</label></div>
                                  <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                                    <span className="delimiter">:</span>
                                    <select id="bookformat" name="bookformat" required>
                                      <option className="short-book" value="ss" disabled="disabled" style={{display: 'none'}}>Saddle stitch</option>
                                      <option className="long-book" value="pb" id="paPERBack" style={{display: 'block'}}>Paperback</option>
                                      <option className="long-book" value="hb" id="hARdCase" style={{display: 'block'}}>Hardcase</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="row align-items-center" id={3}>
                                  <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding"><label>Book Size</label></div>
                                  <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                                    <span className="delimiter">:</span>
                                    <select id="booksize" name="booksize" required>
                                      <option value="203-127" selected="selected">5" x 8"</option>
                                      <option value="216-140">5.5" x 8.5"</option>
                                      <option value="229-152">6" x 9"</option>
                                      <option value="216-216">8.5" x 8.5"</option>
                                      <option value="279-216">8.5" x 11"</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="row align-items-center" id={4}>
                                  <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding"><label>Book Type</label></div>
                                  <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                                    <span className="delimiter">:</span>
                                    <select id="bookColor" name="bookcolor" required>
                                      <option value="bw" selected="selected">Black &amp; White</option>
                                      <option value="color">Full Color</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 button text-center"><button id="calculateprodbutton" name="calculateprodbutton" className="btn btn-primary"  onClick={this.newTutorial}>Calculate</button></div>
                          <div className="bottombox col-lg-12" style={{minHeight: '231px'}}>
                            <div className="row">
                              <div className="col-lg-12 row-class">
                                <div className="row align-items-center">
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><label>Production Cost </label></div>
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><span className="delimiter">:</span><span className="value" id="prodcost" /></div>
                                </div>
                              </div>
                              <div className="col-lg-12 row-class toppadding">
                                <div className="row align-items-start">
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><label>Author copies - at subsidized price </label></div>
                                  <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><span className="delimiter">:</span><span className="value" id="author_copies_price" /></div>
                                </div>
                              </div>
                              <p className="col-lg-12">This is the price at which you can purchase your own book. The minimum number of copies per order is 20.</p>
                              {/*										<p class="col-lg-12">* Production cost for a book printed in black and white.</p>*/}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>							
                  </div>
                  <div className="col-lg-6 col-md-6 authorroyalty col-md-nopadding col-md-padding-7">
                    <div className="col-lg-12 col-xl-11 mr-xl-auto col-md-padding-7 col-md-nopadding">
                      <div className="col-lg-12 nopadding"><h3>AUTHOR EARNINGS CALCULATOR</h3></div>
                      <form id="authorRoyalty" className="formcontainer col-lg-12 nopadding">
                          
                          <input type="hidden" name="VISITS" defaultValue={4} /><input type="hidden" name="ILANDPAGE" defaultValue="https%3A//notionpress.com/%3Fgclid%3DCjwKCAjwq_D7BRADEiwAVMDdHmAFRAv0kOkESPtTHddsW3x9ez7Iks3urMgZiUBc6p3vVR24-pDi_RoCfW4QAvD_BwE" /><input type="hidden" name="LREFERRER" defaultValue="https%3A//www.google.com/" /><input type="hidden" name="IREFERRER" defaultValue="https%3A//www.google.com/" /><input type="hidden" name="utm_device" defaultValue="c" /><input type="hidden" name="utm_matchtype" defaultValue="b" /><input type="hidden" name="UTERM" defaultValue="notionpress%20review" /><input type="hidden" name="UCONTENT" defaultValue={84487714960} /><input type="hidden" name="UCAMPAIGN" defaultValue={367129475} /><input type="hidden" name="UMEDIUM" defaultValue="search" /><input type="hidden" name="USOURCE" defaultValue="google" />
                        <input type="hidden" defaultValue="guided" name="publishingmode" />
                        <div className="centerbox col-lg-12" style={{minHeight: '252px'}}>
                          <div className="row align-items-center">									
                            <div className="get_values col-lg-12">
                              <div className="alert alert-danger hidealert" id="setmrprequired">
                                MRP needs to be set.
                              </div>
                              <div className="alert alert-danger hidealert" id="setmrpgreater">
                                The Set MRP needs to be greater than the Minimum MRP.
                              </div>
                              <div className="alert alert-danger hidealert" id="setmrpnumeric" style={{display: 'none'}}>
                                MRP has to be numeric.
                              </div>
                              <p>Set a selling price above the Minimum Selling Price and hit 'Calculate' to see how much you earn.</p>
                              <div className="row align-items-xl-end align-items-md-end align-items-sm-end align-items-center align-items-lg-center">
                                <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding"><label>Minimum Recommended Price</label></div>
                                <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding"><span className="delimiter">:</span><span id="minmrp" /></div>
                              </div>
                              <div className="row align-items-center paddingtop">
                                <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding"><label>Set Selling Price INR</label></div>
                                <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding"><span className="delimiter">:</span><input type="number" id="setmrp" name="setmrp" required /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 button text-center"><button className="btn btn-primary" id="calculateprofit" name="calculateprofit">Calculate</button></div>
                        <div className="bottombox col-lg-12 display_values" style={{minHeight: '231px'}}>
                          <div className="row align-items-center">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><label className="heading">Channel</label></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6"><span className="heading">Author earnings per copy</span></div>
                              </div>
                            </div>
                            <div className="col-lg-12 row-class paddingtop">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><label>Notion Press Store</label></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><span className="delimiter">:</span><span id="npauthorprofit" className="result value" /></div>
                              </div>
                            </div>
                            <div className="col-lg-12 row-class paddingtop">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><label>Other Stores</label></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding"><span className="delimiter">:</span><span id="flipkartauthorprofit" className="result value" /></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 faq-block" style={{}}>
            <div className="row guidedfaq greybg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mx-auto">
                    <h2>Frequently Asked Questions</h2>
                    <ul>
                      <li>
                        <strong>What is the production cost for my book?</strong> 
                        <p>The production cost for a book depends on the type of Binding, the total number of pages and also if your book will have pages in Black &amp; White or in Color. You can use the Author Earnings calculator above to find the approximate production cost for your book. The final production cost is determined only after your book’s print ready files have been finalized. </p>
                      </li>
                      <li>
                        <strong>How do I set the MRP for my book?</strong> 
                        <p>You can set any price higher than the Minimum Recommended Price for your book. As soon as you type an MRP on the Author Earnings Calculator, you get to see how much you will earn via each of our sales channels.</p>
                      </li>
                      <li>
                        <strong>How do I set a selling price for the International Print version of my book?</strong> 
                        <p>Pricing your book for the International market is different from pricing your book for India. Your Publishing Manager will recommend the minimum recommended selling price for your book based on the production cost and distribution charge. You are free to set a price higher than the minimum recommended price.</p>
                      </li>
                      <li>
                        <strong>How do I set the selling price for eBooks?</strong> 
                        <p>eBooks are usually priced much lower than the print version. Unlike print books, eBooks do not have any production costs associated with it and makes it a little tricky to arrive at a selling price. However, here are some pointers to keep in mind while pricing an eBook.</p>
                        <ul className="list_points_number">
                          <li>To distribute via different websites internationally, the most common rule is for the price to end with $0.99. For example, if you want to price your eBook at USD 4, you would have to price it at USD 3.99. The lowest selling price you can have for an eBook is USD 0.99.</li>
                          <li>For India, the minimum price you can set for an eBook is Rs.49. You are free to set any price above this. Retailers may charge readers a GST on top of this price.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>What is Minimum Recommended Price?</strong> 
                        <p>Minimum Recommended MRP is the lowest price that we recommended for selling your book. This is calculated taking into account the printing and distribution costs.</p>
                      </li>
                      <li>
                        <strong>How are Author Earnings calculated for print books?</strong> 
                        <p>Profit is calculated as the difference between the MRP and expenses incurred during the production and distribution of the book. Profit = MRP – Expenses (Distribution Cost + Production Cost).</p>
                        <ul className="list_points">
                          <li>Writers who publish using the Guided Publishing Program get 100% of the net profits from the book. </li>
                          <li>Writers who publish using Xpress Platform get 70% of the net profits from sale of each copy of the book.</li>
                        </ul>
                        <p>
                          <b className="sub_title">Sample Calculation:</b>
                          Let us assume, the MRP of a book is Rs.100, and the production cost of the book is Rs.30/-. Now, the profits would be calculated as
                        </p>
                        <p>Profits = MRP - (Distribution Cost + Production Cost)<br />
                          = Rs.100 - (50 + 30) = Rs. 20</p>
                        <p>Rs.20/- would be your earnings per book when sold via Amazon.in, Flipkart and all other eCommerce sites and in retail stores.</p>
                        <p>Notion Press charges a 20% distribution fee on all online store orders to account for Payment Processing and Order Fulfilment Charges.</p>
                        <p>Profits are calculated as Rs.100 - (20 + 30) = Rs.50</p>
                        <p> <b className="sub_title">Author Earnings if you have chosen the Guided Publishing Program (100% net profits):</b></p>
                        <p>Notion Press Online Store= Rs. 50<br />
                          Other Stores = Rs. 20</p>
                        <p><b className="sub_title">Author Earnings if you have chosen Xpress Publishing Program (70% net profits):</b></p>
                        <p>Notion Press Online Store= Rs.35<br />Other Stores= Rs.14</p>
                      </li>
                      <li>
                        <strong>How often will I receive my Author Earnings?</strong>
                        <p>
                          <b className="sub_title">Profits from print book sales in India:</b>
                          All print books sold via Indian eCommerce sites are reported on your Author Dashboard as soon as orders are confirmed and determined for each month. Your earnings for each month is paid out within 40 days from the end of the month the sales are reported in. 
                        </p>
                        <p>For example, all sales for the month of January are paid to you by the 10th of March.</p>
                        <p><b className="sub_title">Profits from International print book sales:</b>Print copies of your book are sold via various international eCommerce sites and are updated on your author  dashboard every 90 days after accounting for any returns and taxes levied on the book in each geography where your book sells. Your earnings for each month are paid to you in the subsequent month.</p>
                        <p>For example, all international sales in the month of January are updated on your dashboard in the month of April and the profits from January are paid to you on the 10th of May.</p>
                        <p><b className="sub_title">Profits from eBook sales:</b>eBooks are sold across the world by multiple retailers. eBook sales across various retailers and geographies are reconciled and updated on your dashboard every 90 days. Your earnings for each month are paid to you in the subsequent month.</p>
                        <p>For example, all eBook sales in the month of January are updated on your dashboard in the month of April and the profits from January are paid to you on the 10th of May.</p>
                      </li>
                      <li>
                        <strong>What is the distributor’s cost of a book?</strong>
                        <p>Notion Press has tied up with some of the top distributors in the country like CloudTail India, and Repro Books to ensure the best reach and efficient order fulfillment for your book across the country. The distributor’s cost is the fee to sell your book on various platforms and fulfill all orders that your book receives. Although industry standards vary between 50% - 65%, Notion Press has standardized the distributor’s cost to only 50% regardless of the distributor, for you to be able to take advantage of the full benefits of having a great distributor while still retaining more of your author profits. </p>
                      </li>
                      <li>
                        <strong>Why is the profit higher when I sell via the Notion Press online Bookstore?</strong>
                        <p>Booksellers and eCommerce websites usually charge a 50% distribution fee on MRP on the books they sell. Hence, the earnings you receive is lower than what you receive via our own online bookstore, where a lower distribution fee of 20% of MRP is levied and this advantage translates into higher profits for the author.</p>
                        <p>
                          For example, assume that your book of 100 pages is printed in Black and White, with a Paperback Binding. The book has a production cost of Rs.77.39 and the MRP is Rs.200. When you sell a copy on Amazon.in, your earnings are calculated as
                        </p>
                        <table>
                          <tbody><tr><td className="text-right">Profits = </td><td> MRP - (50% of MRP + Production Cost)</td></tr>
                            <tr><td className="text-right"> = </td><td> Rs.200 - (Rs. 100 + Rs. 77.39)</td></tr>
                            <tr><td className="text-right"> = </td><td> Rs. 22.61</td></tr>
                          </tbody></table>
                        <p>However, when the same book is sold on the Notion Press online store, your earnings are calculated as</p>
                        <table>
                          <tbody><tr><td className="text-right">Profits = </td><td> MRP - (20% of MRP + Production Cost)</td></tr>
                            <tr><td className="text-right">= </td><td> Rs.200 - (Rs. 40 + Rs. 77.39) </td></tr>
                            <tr><td className="text-right">= </td><td> Rs. 82.61</td></tr>
                          </tbody></table> 
                        <p><b className="sub_title">Your Author Earnings if you have chosen the Guided Publishing Program (100% net profits):</b></p>
                        <p>Notion Press Online Store =  Rs. 82.61<br />Other Stores = Rs. 22.61</p>
                        <p><b className="sub_title">Your Author Earnings if you have chosen Xpress Publishing Program (70% net profits):</b></p>	
                        <p>Notion Press Online Store =  Rs.57.82<br />
                          Other Stores = Rs.15.82</p>
                      </li>
                      <li>
                        <strong>How are author earnings calculated for eBooks?</strong>
                        <p>Earnings from eBooks vary based on the type of distribution your readers have chosen while purchasing and also factors like data transfer fee based on the size of your eBook file. Some of the different ways an eBook can be sold are,</p>
                        <ul className="list_points_number">
                          <li>Distribution - A reader buys an eBook just like any other print book and the eBook is sent to the device they would read your book on.</li>
                          <li>Lending - The retailer lends the book to the reader for a limited period chosen by the reader.</li>
                          <li>Subscription - The distributor allows readers to read any book from their list by charging a monthly subscription fee. </li>
                        </ul>
                        <p>Since it is difficult to predict how your readers might consume your content, the final earnings for each eBook sold can only be determined after a sale has occurred. Notion Press deducts a 20% processing fee from your monthly eBook earnings to account for international tax deductions, exchange rates and wire transfer fee.</p>
                      </li>
                      <li>
                        <strong>How are author earnings calculated for International print book sales?</strong>
                        <p>Author earnings from International Sales is calculated as follows.  Profit = MRP – Expenses (Production Cost + Distribution Cost) - NP Processing fee. Notion Press pays all the profits that result from International sales minus a 20% processing fee to account for the tax deductions, currency exchange and the wire transfer fees levied on money transfer from distributors.</p>
                      </li>
                      <li>
                        <strong>How can I check how many books I have sold?</strong>
                        <p>Notion Press provides you the most transparent, accurate, and close to real time tracking of the books you sell right from your Author Dashboard. Here you can track </p>
                        <ul className="list_points">
                          <li>The total number of copies you’ve sold</li>
                          <li>The distribution channels where you are selling copies of your book</li>
                          <li>The number of copies sold per order</li>
                          <li>The date on which the copies have sold</li>
                          <li>And also how much you have earned on every order a reader places.</li>
                        </ul>
                        <p>To make this as transparent as possible, we’ve made it possible for you to now see </p>
                        <ul className="list_points">
                          <li>the total list of orders that have been placed by readers and </li>
                          <li>the number of fulfilled orders from the total orders placed.</li>					
                        </ul>
                        <p>You can log in to our Author Dashboard <a href="https://notionpress.com/login">here</a>.</p>
                      </li>
                      <li> <strong>How often are sales reported on the Author Dashboard?</strong>
                        <p><b className="sub_title">Sales report for print book sales in India:</b>
                          All print books sold via Indian eCommerce sites are reported on your Author Dashboard as soon as orders are confirmed.
                        </p>
                        <p>For example, if an order is placed by a reader on the 15th of January, once the order is confirmed, it is reported on your author dashboard immediately.</p>
                        <p><b className="sub_title">Reports from International print book sales:</b>
                          All print books sold via international eCommerce sites are updated on your dashboard every 90 days. 
                        </p>
                        <p>For example, all international sales in the month of January are updated on your dashboard in the month of April and the profits from January are paid to you on the 10th of May.</p>
                        <p><b className="sub_title">Reports from eBook sales:</b>
                          All eBooks sold via various eBook retailers in different countries are reconciled and updated on your author dashboard every 90 days. 
                        </p>
                        <p>For example, all eBook sales in the month of January are updated on your dashboard in the month of April and the profits from January are paid to you on the 10th of May.</p>
                      </li>
                      <li>
                        <strong>What is Author Subsidized Cost and at what price does the author buy copies of the book?</strong>
                        <p>Notion Press provides authors an option to purchase Author Copies at a subsidized price. Unlike a lot of publishing companies where an author has to pay a discounted retail price plus shipping charges to purchase author copies, Notion Press's authors can buy copies at the Author Subsidized Cost - which is essentially the production cost of your book along with the applicable delivery charges. </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>	</div>
      </div>
       
   );
  }
}
