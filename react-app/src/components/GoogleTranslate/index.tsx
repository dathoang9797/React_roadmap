import { useEffect, useState } from 'react'

const GoogleTranslateCrashesTernaryRepro = () => {
  const lights = 4
  const [lightsOn, setLightsOn] = useState(true)

  const [simulateGoogleTranslate, setSimulateGoogleTranslate] = useState(true)
  useEffect(() => {
    if (!simulateGoogleTranslate) {
      return
    }

    // Not using ref because I want to eliminate all magic and any suggestion
    // that React might be doing something funny
    document
      .getElementById('GoogleTranslateCrashesTernaryRepro-translateme')
      ?.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          // eslint-disable-next-line @typescript-eslint/no-deprecated
          const fontElem = document.createElement('font')
          fontElem.textContent = `[${child.textContent ?? ''}]`

          child.parentElement?.insertBefore(fontElem, child)
          child.parentElement?.removeChild(child)
        }
      })
  })

  return (
    <div
      // Trigger a full remount of the DOM when the checkbox is toggled
      key={String(simulateGoogleTranslate)}
      // Just a little something to show current state
      style={
        lightsOn
          ? {}
          : {
              backgroundColor: '#333',
              color: 'white',
              padding: '1em',
              margin: '-1em',
            }
      }
    >
      <div style={{ marginBottom: '1em' }}>
        <label>
          <input
            type="checkbox"
            checked={simulateGoogleTranslate}
            onChange={() => {
              setSimulateGoogleTranslate(!simulateGoogleTranslate)
            }}
          />{' '}
          Simulate Google Translate
        </label>
      </div>

      <div id="GoogleTranslateCrashesTernaryRepro-translateme">
        <button
          type="button"
          onClick={() => {
            setLightsOn(!lightsOn)
          }}
          style={{ marginRight: '0.5em' }}
        >
          Toggle lights
        </button>
        {lightsOn ? <span>There are {lights} lights!</span> : <span>The lights are off</span>}
      </div>
    </div>
  )
}

export default GoogleTranslateCrashesTernaryRepro