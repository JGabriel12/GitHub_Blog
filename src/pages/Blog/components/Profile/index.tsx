import { ProfileContainer, ProfileDescription, ProfilePicture } from './style'
import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { ExternalLink } from '../../../../components/ExternalLink'
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

const userName = 'JGabriel12'

interface ProfileData {
  name: string
  avatar_url: string
  html_url: string
  bio: string
  login: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  async function getProfileData() {
    const response = await api.get(`/users/${userName}`)

    setProfileData(response.data)
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      <ProfilePicture src={profileData.avatar_url} alt="Profile picture" />
      <ProfileDescription>
        <header>
          <h1>{profileData.name}</h1>

          <div>
            <ExternalLink
              text="github"
              href={profileData.html_url}
              target="blank"
            />
          </div>
        </header>

        <p>{profileData.bio}</p>

        <ul>
          <li>
            <GithubLogo weight="fill" /> {profileData.login}
          </li>
          <li>
            <Buildings weight="fill" />{' '}
            {profileData.company === null
              ? 'Desempregado'
              : profileData.company}
          </li>
          <li>
            <Users weight="fill" /> {profileData.followers} seguidores
          </li>
        </ul>
      </ProfileDescription>
    </ProfileContainer>
  )
}
