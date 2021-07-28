import { Button, Title } from '~/components/ui'

const Pricing = () => {
  return (
    <section class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <Title>Pricing</Title>
        <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Free
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £0
                <span class="text-base">for one user</span>
              </div>
              <div class="flex items-center justify-center">
                <Button primary class="my-6">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
              <div class="h-1 w-full gradient my-0 py-0"></div>
              <ul class="w-full text-center text-base font-bold">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="w-full pt-6 text-4xl font-bold text-center">
                £x.99
                <span class="text-base">/ per user</span>
              </div>
              <div class="flex items-center justify-center">
                <Button primary class="my-6">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Pro
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £x.99
                <span class="text-base">/ per user</span>
              </div>
              <div class="flex items-center justify-center">
                <Button primary class="my-6">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
