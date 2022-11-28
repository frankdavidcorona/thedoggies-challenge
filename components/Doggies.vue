<template>
  <div class="container">
    <DoggiesSearchForm @doggieToken="onSearchDoggies($event)" />

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
    onSearchDoggies(doggieToken) {
      // Handler for search doggies using Web3
      const web3Provider = new Web3.providers.HttpProvider(
        'https://bold-flashy-night.ethereum-goerli.discover.quiknode.pro/31af13c3a582d03c270b12b712c384a1bd602f0a/'
      )
      // set provider for all later instances to use
      Contract.setProvider(web3Provider)
      const SmartContractAddress = '0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6'
      const contract = new Contract(Abi, SmartContractAddress)

      contract.methods.totalSupply().call(function (err, res) {
        if (err) {
          // eslint-disable-next-line no-console
          console.log('An error occured', err)
          return
        }
        // eslint-disable-next-line no-console
        console.log('The balance is: ', res)
      })

      // Assign founded Doggie to the results
      this.doggie = {
        name: 'Dogo',
        description:
          'This breed has its origin in the province of Cordoba, in the central (Mediterranean) region of the Republic of Argentina. Its creator was Dr.Antonio Nores Martinez',
        owner: 'Dr.Antonio Nores Martinez',
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
