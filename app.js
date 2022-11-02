console.log('js is loaded');

// SECTION packages array
const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

// STUB Drawing packages
function drawPackages(packagesArray) {
  let possiblePackagesElm = document.getElementById('possible-packages')
  let template = ''

  packagesArray.forEach(package => {
    template += `<div class="col-3 p-2 card">
      <h2>TO: ${package.to}</h2>
        <h4>ID: ${package.trackingNumber}</h4>
      </div>`})
  possiblePackagesElm.innerHTML = template
}

// STUB Is Fragile?
function drawFragilePackages() {
  let template = ''
  let fragilePackages = packages.filter(package =>
    package.isFragile == true
  )
  console.log('package is', fragilePackages);
  drawPackages(fragilePackages)
}

// STUB Filter by Priority Level
function filterFree() {
  let template = ''
  let freePackages = packages.filter(package =>
    package.priorityLevel == 'free'
  )
  console.log(freePackages);
  drawPackages(freePackages)
}

function filterStandard() {
  let template = ''
  let standardPackages = packages.filter(package =>
    package.priorityLevel == 'standard'
  )
  console.log(standardPackages);
  drawPackages(standardPackages)
}

function filterExpress() {
  let template = ''
  let expressPackages = packages.filter(package =>
    package.priorityLevel == 'express'
  )
  console.log(expressPackages);
  drawPackages(expressPackages)
}

// STUB Sort by weight

function sortWeightLightToHeavy() {
  let lightToHeavy = packages.sort((packageA, packageB) => packageA.weight - packageB.weight)
  console.log('light To Heavy', lightToHeavy);
  drawPackages(lightToHeavy)
}

function sortWeightHeavyToLight() {
  let heavyToLight = packages.sort((packageA, packageB) => packageB.weight - packageA.weight)
  console.log('heavy To Light', heavyToLight);
  drawPackages(heavyToLight)
}




drawPackages(packages)