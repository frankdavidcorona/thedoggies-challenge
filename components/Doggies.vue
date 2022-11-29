<template>
  <div class="container">
    <DoggiesSearchForm
      @doggieToken="onSearchDoggies($event)"
      @randomDoggieToken="onSearchDoggies($event)"
    />

    <div v-if="Object.keys(doggie).length">
      <DoggiesDetails :doggie="doggie" />
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import Contract from 'web3-eth-contract'
import Abi from '../web3/abi.json'

import DoggiesSearchForm from './DoggiesSearchForm.vue'
import DoggiesDetails from './DoggiesDetails.vue'

export default {
  name: 'TheDoggies',
  components: {
    DoggiesSearchForm,
    DoggiesDetails,
  },
  data() {
    return {
      doggie: {},
    }
  },
  methods: {
    // ** Search Doggies will receive a Doggie ID and search it into the network */
    onSearchDoggies(doggieToken) {
      // ** Configure Http Provider
      const web3Provider = new Web3.providers.HttpProvider(
        process.env.HOST_HTTP_PROVIDER
      )

      // ** Set provider for all later instances to use
      Contract.setProvider(web3Provider)
      const SmartContractAddress = process.env.SMART_CONTRACT_ADDRESS

      // ** Create Contract Instance
      const contract = new Contract(Abi, SmartContractAddress)

      // ** Call Contract Method to find Doggies
      // ** So far I'm unable to find the method to use into the Contract ABI to get the Doggie details
      contract.methods.name().call(function (err, res) {
        if (err) {
          // ** For some reason, the contract is not able to find the Doggie, triggering always the same output:
          // An error occured Error: Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.
          // at ABICoder.decodeParametersWith (index.js?aab1:304:1)
          // at ABICoder.decodeParameters (index.js?aab1:291:1)
          // at Contract._decodeMethodReturn (index.js?6e11:494:1)
          // at Method.outputFormatter (index.js?6e11:801:1)
          // at Method.formatOutput (index.js?7789:148:1)
          // at sendTxCallback (index.js?7789:536:1)
          // at eval (index.js?166e:305:1)
          // at eval (web3.min.js?c0d8:33:1)

          // eslint-disable-next-line no-console
          console.log('An error occured', err)
        }
      })

      // ** Receive Doggie information and assign it to the Doggie object (should be received from the contract)
      this.doggie = {
        name: 'Snoop Sport - Snoop Dogg',
        description:
          'This breed has its origin in the province of Cordoba, in the central (Mediterranean) region of the Republic of Argentina. Its creator was Dr.Antonio Nores Martinez',
        owner: 'Snoop Dogg',
        thumbnail:
          'https://www.akc.org/wp-content/uploads/2017/11/Dogo-puppy.jpg',
        traits: [
          { trait: 'Breed', value: 'Dogo' },
          { trait: 'Breed', value: 'Dogo' },
          { trait: 'Breed', value: 'Dogo' },
        ],
      }
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  padding: 0 4rem;
}
</style>
