import { ProfileContainer, ProfileDescription, ProfilePicture } from './style'
import AvatarImage from '../../../../assets/avatar.svg'
import { ArrowLineUpRight, Buildings, GithubLogo, Users } from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src={AvatarImage} alt="Profile picture" />
      <ProfileDescription>
        <header>
          <h1>Cameron Williamson</h1>
          <a href="#">
            GITHUB <ArrowLineUpRight weight="fill" />
          </a>
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
