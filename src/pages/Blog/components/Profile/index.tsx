import { ProfileContainer, ProfileDescription, ProfilePicture } from './style'
import AvatarImage from '../../../../assets/avatar.svg'
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { ExternalLink } from '../../../../components/ExternalLink'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src={AvatarImage} alt="Profile picture" />
      <ProfileDescription>
        <header>
          <h1>Cameron Williamson</h1>

          <div>
            <ExternalLink text="github" href="#" />
          </div>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <GithubLogo weight="fill" /> cameronwll
          </li>
          <li>
            <Buildings weight="fill" /> Rocketseat
          </li>
          <li>
            <Users weight="fill" /> 32 seguidores
          </li>
        </ul>
      </ProfileDescription>
    </ProfileContainer>
  )
}
