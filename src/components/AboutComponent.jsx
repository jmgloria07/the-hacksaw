import React from 'react'

const AboutComponent = () => {
  return (
    <main className='container mt-3 mb-5'>
      <p className='lead'>
        Spending too much time on manually computing cuts? Too many errors? Buying inventory more than needed?
      </p>
      <p>Welcome to THE HACK-SAW, a web application crafted to assist in streamlining cutting processes across various one-dimensional materials.
        THE HACK-SAW offers a straightforward approach on generating plans, reducing wastes, and enhancing material utilization with little-to-no manual optimization.
      </p>
      <h3>Key Features of Using THE-HACKSAW</h3>
      <ul className='list-unstyled'>
        <li><strong>Optimization Algorithms</strong>: THE-HACKSAW uses basic optimization algorithms to help in generating cutting plans, maximizing material utilization, and minimizing wastes.
        </li>
        <li><strong>Quick Start</strong>: Accessible via any modern web browser, THE-HACKSAW provides convenience without the need for software installations.
        </li>
        <li><strong>User-Friendly Interface</strong>: Designed with simplicity in mind, the interface also allows copy-and-paste to and from your preferred Spreadsheet tool.
        </li>
        <li><strong>Free and Open Source</strong>: No account registrations, all free. Feel free to review the source at <a href='https://github.com/jmgloria07/the-hacksaw.git'>Github</a>.
        </li>
      </ul>
      <h3>Getting Started</h3>
      <p>Go to <a href='/compute'>Compute</a> page and fill-out the three input fields:</p>
      <ul className='list-unstyled'>
        <li><strong>Required Cuts</strong>: Your required cuts separated by lines. You can simply copy from your spreadsheet and paste it on the field provided.</li>
        <li><strong>Quantity</strong>: The quantities per cut. Same with above, you can also copy-paste your data here. You may also check on the table on the
          right (visible only if you're on a desktop browser) if your inputs match, updated real-time.
        </li>
        <li><strong>Material Size</strong>: The purchasable size of the material.</li>
      </ul>
      <p>Then hit the Compute button. The tool will show three combinations according to the algorithm used:</p>
      <ul className='list-unstyled'>
        <li><strong>Simple</strong>: This uses the simplest and fastest algorithm, which often produces the same combination as Tight.\</li>
        <li><strong>Tight</strong>: This will produce the combination where the cuts are ensured to fit in the tightest.</li>
        <li><strong>Loose</strong>: In contrast to Tight, cuts are fit in the loosest. This is preferred generally when you want longer scraps per material.</li>
      </ul>
      <div className='alert alert-info'>The ‘best’ combination often depends on the specific problem, constraints, and objectives. It is advised to analyze the problem carefully and consider all combinations before deciding which one to use.</div>
      <p>You may contine to <strong>Copy All</strong> the cuts, or <strong>Copy</strong> the specific material/row. Note that choosing the latter will append the computed scrap as the last column.</p>
      <p>For those who love the nerd stuff, feel free to browse <a href='https://github.com/jmgloria07/the-hacksaw.git'>the source code.</a></p>
    </main>
  )
}

export default AboutComponent