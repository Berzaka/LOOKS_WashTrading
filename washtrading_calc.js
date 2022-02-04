const gas_price = 80; // $
const eth_price = 2672
const trading_fees = 0.02 // 2 % trading fee default
const looks_price = 5; // in dollars
const daily_looks_rewarded = 2866500;
let looks_tot_vol = 250000; // LOOKS total volume traded in ETH
let nft_value =100; // ETH
let num_trades = 100; // number of trades user will be doing
let tot_vol_traded = nft_value*num_trades;

let gas_fees_total = num_trades*gas_price/eth_price;
let tot_trading_fees = trading_fees*tot_vol_traded;
let tot_losses = gas_fees_total + tot_trading_fees
let looks_acquired = tot_vol_traded/looks_tot_vol * daily_looks_rewarded
let tot_looks_dollars = looks_acquired*looks_price;
let gross = tot_looks_dollars/eth_price;
let profit = gross - tot_losses;

console.log('Assumptions')
console.log('-------------------------------------')
console.log('Gas price: $ ' + gas_price)
console.log('ETH Price: $ ' + eth_price)
console.log('LOOKS Price $ ' + looks_price)
console.log('Total LOOKS Reward Daily: '  + daily_looks_rewarded + ' ETH')
console.log('Number of Trades: ' + num_trades)
console.log('NFT Value: ' + nft_value + ' ETH')

console.log('LOOKS Daily Volume: ' + looks_tot_vol + ' ETH')
console.log('\n')
console.log('Calculations')
console.log('-------------------------------------')
console.log('Total Volume Traded: ' + tot_vol_traded + ' ETH')
console.log('Gas Fees Total: ' + gas_fees_total + ' ETH')
console.log('Total Trading Fees Paid: ' + tot_trading_fees + ' ETH')

console.log('Gross: ' + gross + ' ETH')
console.log('Total Losses: ' + tot_losses + ' ETH')
console.log('Gross - Losses = Profit =  ' + profit + ' ETH')
