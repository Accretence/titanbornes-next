import React from 'react'

// Components
import Meta from '../utils/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

// Additional Libraries
import {
    useTheme,
    Text,
    Image,
    Spacer,
    Card,
    Description,
} from '@geist-ui/core'

const Lore = () => {
    const theme = useTheme()

    return (
        <>
            <Meta title="Lore" />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    <Text h2>Lore </Text>

                    <Text small>
                        This is a community owned project.{' '}
                        <Badged c="FOUNDERS"/>{' '}
                        pushed it into existence but we will all shape it
                        together with our discussions, interactions, Discord
                        polls and if need be, DAO voting.
                    </Text>
                </div>
            </div>
            <Spacer />
            <div className="PageWrapper">
                <div className="PageContent">
                    <Card mb={1} className="WikiContent">
                        <Text h3>Who are the Titanbornes?</Text>
                        <Text small>
                            Titanbornes are a largely forgotten demigod
                            creatures born from and put to a deep slumber by the
                            Titans, buried in a large, undiscovered and
                            beautiful Crypt. They divide themselves into 2
                            factions;{' '}
                            <Badged c="REAPERS"/>{' '}
                            and{' '}
                            <Badged c="TRICKSTERS"/>
                            . They don't harbor any malice for each other but
                            prefer to stay with their own.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>Who were the Titans?</Text>
                        <Text small>
                            Titans shaped the world as we know it today. Nobody
                            knows where they came from and where they've gone
                            to. The first and only children they birthed out of
                            their own bodies were the{' '}
                            <Badged c="NIGHTMARES"/>{' '}
                            but they immediately knew what abominations they had
                            created and vowed to never birth children out of
                            their own flesh. They knew they had to contain the
                            evil and imprisoned the Nightmares. They poured
                            their own blood into a mountain and made it flow
                            through a fountain which birthed{' '}
                            <Badged c="TITANBORNES"/>{' '}
                            to create the only possible being capable of taking
                            on the Nightmares if they ever escaped their
                            captivity.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>What are the 2 factions?</Text>
                        <Text small>
                            <Badged c="REAPERS"/>{' '}
                            are more powerful and adept to battle.
                            <br />
                            <Badged c="TRICKSTERS"/>{' '}
                            are the smartest and more shrewd.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>Tip the balance...</Text>
                        <Text small>
                            Titans, Nightmares and Titanbornes have been gone
                            from the face of the earth for millenias but they
                            have left artifacts telling stories of their
                            existence. Z was an archaeologist studying the
                            oldest artifacts known to man who one day found a
                            bizarre artifact that made her come in contact with
                            a voice that introduced themeselves as{' '}
                            <Badged c="NIGHTMARES"/>
                            . They tell the story of creation to Z, how the
                            Titans created the world and how they birthed their
                            first childs, Nightmares from their own bodies and
                            imprisoned them soon after they were born. How the
                            Titans created the{' '}
                            <Badged c="TITANBORNES"/>{' '}
                            to destroy their own first childs if they ever
                            escaped their captivity. Nightmares created an
                            amulet just before they were imprisoned, an amulet
                            that holds the power to manipulate Ichor, blood of
                            the Titans that flows inside Titanbornes. Z finds
                            the amulet with their directions.
                        </Text>
                    </Card>
                    <Card className="WikiContent">
                        <Text h3>Chapter 00: Prologue</Text>
                        <Text small>
                            Z activates the amulet & Titanbornes awaken from
                            their slumber. They don't know how long or why they
                            were put to sleep. One finds an old tablet in the
                            Crypt depicting prophecies of them bringing about
                            the end of life on earth. The tablet describes them
                            as abominations exiled from face of the earth
                            millenias ago.{' '}
                            <Badged c="TITANBORNES"/>{' '}
                            believe themeselves to be gentle and just creatures
                            wrongfully robbed of living for thousands of years.
                            They decide to find their way out of the Crypt and
                            to the outside world. They find hordes of sentries
                            guarding their way to the gate but they start
                            moving, gathering resources and fighting their way
                            to the gate. Can they open the gate? What is waiting
                            on the other side?
                        </Text>
                    </Card>
                </div>
            </div>
            <Footer />
            <style>
                {`
					small {
               text-align: justify!important;
            	}
					.card:hover {
					filter: invert(1);
						}
					.PageHeader {
						width: ${theme.layout.pageWidthWithMargin};
						max-width: 100%;
						margin: 0 auto;
						padding: 0 ${theme.layout.pageMargin};
						box-sizing: border-box;
					}
					.PageWrapper {
						background-color: ${theme.palette.accents_1};
					}
					.PageContent {
						width: ${theme.layout.pageWidthWithMargin};
						max-width: 100%;
						margin: 0 auto;
						padding: 0 ${theme.layout.pageMargin};
						transform: translateY(-35px);
						box-sizing: border-box;
					}
				`}
            </style>
        </>
    )
}

export default Lore
